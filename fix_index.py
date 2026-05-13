from pathlib import Path
path = Path('index.html')
text = path.read_text(encoding='utf-8')
old_head = '''        <meta\n            name="description"\n            content="Portfolio of INALEGWU OWIOCHOGBE DANIEL, a Chemical Engineer specializing in software development, AI training, and project execution."\n        />\n        <meta\n            name="keywords"\n            content="INALEGWU OWIOCHOGBE DANIEL, Chemical Engineer, Software Developer, AI Training, Go, Python, GitHub, Portfolio"\n        />\n        <meta name="author" content="Portfolio Owner" />\n        <title>Portfolio | Personal Portfolio</title>'''
new_head = '''        <meta
            name="description"
            content="Portfolio of INALEGWU OWIOCHOGBE DANIEL, a Chemical Engineer specializing in software development, AI training, and project execution."
        />
        <meta
            name="keywords"
            content="INALEGWU OWIOCHOGBE DANIEL, Chemical Engineer, Software Developer, AI Training, Go, Python, GitHub, Portfolio"
        />
        <meta name="author" content="INALEGWU OWIOCHOGBE DANIEL" />
        <title>Portfolio | INALEGWU OWIOCHOGBE DANIEL</title>'''
old_avatar = '''                    <a\n                        href="./OBRIAN.jpeg"\n                        target="_blank"\n                        rel="noopener noreferrer"\n                        title="Click me!"\n                        id="avatar-link"\n                    >\n                        <figure class="avatar-box">\n                            <img\n                                class="thumbnail"\n                                src="./OBRIAN.jpeg"\n                                alt="Portfolio Owner"\n                                width="80"\n                            />\n                        </figure>\n                    </a>'''
new_avatar = '''                    <a
                        href="./OBRIAN.jpeg"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Click me!"
                        id="avatar-link"
                    >
                        <figure class="avatar-box">
                            <img
                                class="thumbnail"
                                src="./OBRIAN.jpeg"
                                alt="Portfolio Owner"
                                width="80"
                            />
                        </figure>
                    </a>'''
if old_head not in text:
    raise ValueError('Old head block not found')
if old_avatar not in text:
    raise ValueError('Old avatar block not found')
text = text.replace(old_head, new_head)
text = text.replace(old_avatar, new_avatar)
path.write_text(text, encoding='utf-8')
print('patched')
