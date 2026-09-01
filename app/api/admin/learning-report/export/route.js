import { requireSession } from "@/lib/server/auth";
import { ApiError, routeError } from "@/lib/server/api-response";
import {
  createExcelReport,
  createPdfReport,
  getLearningReport
} from "@/lib/server/report-service";
import { parseReportFilters } from "../route";

export const runtime = "nodejs";

export async function GET(request) {
  try {
    await requireSession({ roles: ["admin", "teacher"] });
    const format = request.nextUrl.searchParams.get("format");
    if (!format || !["xlsx", "pdf"].includes(format)) {
      throw new ApiError(
        400,
        "INVALID_REPORT_FORMAT",
        "Định dạng báo cáo phải là xlsx hoặc pdf."
      );
    }
    const filters = parseReportFilters(request.nextUrl.searchParams);
    const report = await getLearningReport(filters);
    if (report.users.length === 0) {
      throw new ApiError(404, "NO_REPORT_DATA", "Không có dữ liệu phù hợp để xuất báo cáo.");
    }

    let body;
    let contentType;
    try {
      if (format === "xlsx") {
        body = await createExcelReport(report);
        contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      } else {
        body = createPdfReport(report);
        contentType = "application/pdf";
      }
    } catch (error) {
      console.error("Report generation failed:", error);
      throw new ApiError(500, "REPORT_GENERATION_FAILED", "Không thể tạo file báo cáo.");
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="studymaster-learning-report-${timestamp}.${format}"`,
        "Cache-Control": "no-store"
      }
    });
  } catch (error) {
    return routeError(error);
  }
}

