import os
from PIL import Image

def make_transparent(input_path, output_path):
    if not os.path.exists(input_path):
        print(f"Error: {input_path} does not exist.")
        return False
        
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # item is (r, g, b, a)
        r, g, b, a = item
        
        # Calculate brightness / luminance
        # Using standard formula: Y = 0.299*R + 0.587*G + 0.114*B
        luminance = 0.299 * r + 0.587 * g + 0.114 * b
        
        # We want to key out the black background.
        # Let's see: if luminance is very low, it's background.
        # Let's use a threshold:
        # below 20: fully transparent
        # above 50: fully opaque
        # in between: linear transition for smooth edges
        if luminance < 20:
            alpha = 0
        elif luminance > 50:
            alpha = 255
        else:
            # Linear transition
            alpha = int((luminance - 20) / (50 - 20) * 255)
            
        new_data.append((r, g, b, alpha))
        
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Successfully saved transparent image to {output_path}")
    return True

if __name__ == "__main__":
    input_file = r"C:\Users\Admin\Desktop\TT HCM\public\assets\cancer_mascot.png"
    output_file = r"C:\Users\Admin\Desktop\TT HCM\public\assets\cancer_mascot_transparent.png"
    make_transparent(input_file, output_file)
