import os
from PIL import Image

def make_transparent(image_path, output_path):
    if not os.path.exists(image_path):
        print(f"File {image_path} does not exist!")
        return
        
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    # Loop through all pixels
    for item in datas:
        r, g, b, a = item
        
        # Check if the pixel is dark gray (background)
        # Background is roughly around 43, 44, 46.
        # We use a threshold of 60 to catch all variations of the dark background.
        if r < 60 and g < 60 and b < 60:
            # Make it completely transparent
            new_data.append((0, 0, 0, 0))
        else:
            # Keep the gold/amber lines
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print("Background removed successfully!")

if __name__ == "__main__":
    make_transparent("c:/Users/Admin/Desktop/TT HCM/assets/logo.png", "c:/Users/Admin/Desktop/TT HCM/assets/logo.png")
