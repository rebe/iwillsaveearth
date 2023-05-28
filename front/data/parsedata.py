import os
import sys

def format_text_to_html(input_file):
    html = ""
    ul_open = False  # Track if <ul> tag is open

    with open(input_file, "r") as file:
        lines = file.readlines()

        for line in lines:
            line = line.rstrip()  # Remove trailing whitespace

            if line.startswith("User"):
                html += "<h2>User</h2>\n"
                ul_open = False
            elif line.startswith("ChatGPT"):
                html += "<h2>ChatGPT</h2>\n"
                ul_open = False
            elif line.startswith(" " * 4):  # Detects 4 spaces as indentation
                if not ul_open:
                    html += "<ul>\n"
                    ul_open = True
                html += f"  <li>{line.strip()}</li>\n"
            elif line:  # Non-empty line, treat as a paragraph
                if ul_open:
                    html += "</ul>\n"
                    ul_open = False
                html += f"<p>{line.strip()}</p>\n"

    if ul_open:
        html += "</ul>\n"

    return html

def write_html_file(input_file):
    output_file = os.path.splitext(input_file)[0] + ".html"
    html_output = format_text_to_html(input_file)

    with open(output_file, "w") as file:
        file.write(html_output)

    print(f"HTML file '{output_file}' has been created.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Please provide the input file path as a command-line argument.")
        sys.exit(1)

    input_file = sys.argv[1]
    write_html_file(input_file)