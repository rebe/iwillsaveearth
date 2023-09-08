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
                html += "<h4>User</h4>\n"
                ul_open = False
            elif line.startswith("ChatGPT"):
                html += "<h4>ChatGPT</h4>\n"
                ul_open = False
            elif line.startswith(" " * 4):  # Detects 4 spaces as indentation
                if not ul_open:
                    html += "<ul>\n"
                    ul_open = True
                html += f"<li>{line.strip()}</li>\n"
            elif line:  # Non-empty line, treat as a paragraph
                if ul_open:
                    html += "</ul>\n"
                    ul_open = False
                html += f"<p>{line.strip()}</p>\n"

    if ul_open:
        html += "</ul>\n"

    return html

def create_react(str_to_reactify, pagename): 
    r = "export default function " + pagename + "() {\n"
    r += "    return (\n"
    r += "<div>\n"
    r += str_to_reactify
    r += "\n"
    r += "</div>\n"
    r += "    );\n"
    r += "};\n"
    return r


def write_html_file(input_file):
    output_file = os.path.splitext(input_file)[0] + ".tsx"
    html_output = format_text_to_html(input_file)
    html_output = create_react(html_output, os.path.splitext(input_file)[0])
    with open(output_file, "w") as file:
        file.write(html_output)

    print(f"Typescript file '{output_file}' has been created.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Please provide the input file path as a command-line argument.")
        sys.exit(1)

    input_file = sys.argv[1]
    write_html_file(input_file)