from PIL import Image
import os

color_path = r"C:\Users\Admin\Desktop\TT HCM\public\assets\color.png"
if os.path.exists(color_path):
    im = Image.open(color_path)
    print("Image Size:", im.size)
    print("Mode:", im.mode)
    
    # Resize to speed up dominant color extraction
    im_small = im.resize((100, 100))
    colors = im_small.getcolors(maxcolors=100000)
    if colors:
        colors.sort(key=lambda x: x[0], reverse=True)
        print("Dominant Colors (count, RGBA/RGB):")
        for count, color in colors[:20]:
            # Convert color to hex
            if len(color) >= 3:
                hex_color = '#{:02x}{:02x}{:02x}'.format(color[0], color[1], color[2])
                print(f"{count}: {color} -> {hex_color}")
            else:
                print(f"{count}: {color}")
else:
    print("File not found")
