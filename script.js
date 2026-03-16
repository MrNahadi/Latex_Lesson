        /* ────────────────────────────────
           LESSON DATA
        ──────────────────────────────── */
        const appData = [
            {
                id: 'intro',
                num: '01',
                title: 'Introduction & The "Why"',
                introText: 'Welcome to the interactive LaTeX crash course! This section explains the fundamental philosophy behind LaTeX and why it is the standard for scientific and academic publishing.',
                content: `
                    <div class="lesson-body">
                        <h3>WYSIWYG vs WYSIWYM</h3>
                        <p class="drop-cap">
                            Traditional word processors like Microsoft Word or Google Docs operate on a <strong>WYSIWYG</strong> (What You See Is What You Get) principle. You format the text visually as you type.
                        </p>
                        <p>
                            LaTeX, however, is a document preparation system based on <strong>WYSIWYM</strong> (What You See Is What You Mean). You write plain text interspersed with commands that describe the <em>structure</em> and <em>meaning</em> of the content. A compiler then reads this code and generates a beautifully typeset PDF.
                        </p>
                        <p>
                            This separation of content and presentation allows authors to focus purely on writing, letting LaTeX handle the complex typesetting rules, margins, and layout.
                        </p>
                    </div>

                    <div class="chart-card anim-in anim-delay-3">
                        <h4>Time Allocation: Word Processors vs LaTeX</h4>
                        <div class="chart-container">
                            <canvas id="introChart"></canvas>
                        </div>
                        <p class="chart-caption">Estimated time spent on formatting as document complexity increases.</p>
                    </div>
                `,
                hasChart: true
            },
            {
                id: 'first-doc',
                num: '02',
                title: 'Your First Document',
                introText: 'Let\'s create the absolute minimum code required to generate a LaTeX document. Every LaTeX document has a specific skeleton structure.',
                content: `
                    <div class="lesson-body">
                        <p class="drop-cap">
                            A LaTeX document consists of two main parts: the <strong>preamble</strong> and the <strong>document body</strong>.
                            The preamble is everything before <code>\\begin{document}</code>. It defines the document class and loads packages. The body contains your actual text.
                        </p>
                    </div>
                `,
                code: `\\documentclass{article}

% This is a comment. It is ignored by the compiler.
% The preamble goes here.

\\begin{document}

Hello, World! Welcome to LaTeX.

\\end{document}`,
                output: `<div style="margin-top:2rem">Hello, World! Welcome to LaTeX.</div>`,
                hasChart: false
            },
            {
                id: 'preamble',
                num: '03',
                title: 'Title, Author & Date',
                introText: 'Now let\'s add metadata to our document. LaTeX automatically formats title pages beautifully based on just a few commands provided in the preamble.',
                content: `
                    <div class="lesson-body">
                        <p class="drop-cap">
                            To add a title, author, and date, you declare them in the preamble. Then, inside the document body, you use the <code>\\maketitle</code> command to instruct LaTeX to print them.
                        </p>
                    </div>
                `,
                code: `\\documentclass{article}

\\title{My First Interactive Document}
\\author{Jane Doe}
\\date{August 2024}

\\begin{document}

\\maketitle

Here begins the actual content of the
amazing document we are writing today.

\\end{document}`,
                output: `
                    <div style="text-align:center;margin-top:2.5rem;margin-bottom:2rem">
                        <h1 style="font-size:1.6rem;font-weight:bold;margin-bottom:0.3rem">My First Interactive Document</h1>
                        <p style="margin-bottom:0.15rem">Jane Doe</p>
                        <p>August 2024</p>
                    </div>
                    <p style="text-indent:2em;text-align:justify">
                        Here begins the actual content of the amazing document we are writing today.
                    </p>
                `,
                hasChart: false
            },
            {
                id: 'formatting',
                num: '04',
                title: 'Formatting Text',
                introText: 'Learn the basic commands for bold, italics, and underlining. Notice how commands wrap around the text using curly braces.',
                content: `
                    <div class="lesson-body">
                        <p class="drop-cap">
                            In LaTeX, formatting is applied via commands that take the text as an argument inside curly braces <code>{}</code>.
                        </p>
                        <ul>
                            <li><strong>Bold:</strong> <code>\\textbf{text}</code></li>
                            <li><em>Italics:</em> <code>\\textit{text}</code></li>
                            <li><u>Underline:</u> <code>\\underline{text}</code></li>
                        </ul>
                    </div>
                `,
                code: `\\documentclass{article}
\\begin{document}

Some of the greatest discoveries in
science were made by \\textbf{accident}.

However, it requires a \\textit{prepared
mind} to recognize them.

This statement is absolutely
\\underline{true}.

You can also \\textbf{\\textit{combine}}
commands!

\\end{document}`,
                output: `
                    <div style="margin-top:2rem">
                        <p style="margin-bottom:1em">Some of the greatest discoveries in science were made by <b>accident</b>.</p>
                        <p style="margin-bottom:1em">However, it requires a <i>prepared mind</i> to recognize them.</p>
                        <p style="margin-bottom:1em">This statement is absolutely <u>true</u>.</p>
                        <p>You can also <b><i>combine</i></b> commands!</p>
                    </div>
                `,
                hasChart: false
            },
            {
                id: 'lists',
                num: '05',
                title: 'Lists',
                introText: 'Lists are created using specific environments. An environment begins with \\begin{...} and ends with \\end{...}.',
                content: `
                    <div class="lesson-body">
                        <p class="drop-cap">
                            For an unordered (bulleted) list, use the <code>itemize</code> environment. For an ordered (numbered) list, use the <code>enumerate</code> environment. Inside the environment, each item is declared with the <code>\\item</code> command.
                        </p>
                    </div>
                `,
                code: `\\documentclass{article}
\\begin{document}

Unordered Grocery List:
\\begin{itemize}
  \\item Apples
  \\item Bananas
  \\item Carrots
\\end{itemize}

Ordered Steps:
\\begin{enumerate}
  \\item Boil water.
  \\item Add pasta.
  \\item Wait 10 minutes.
\\end{enumerate}

\\end{document}`,
                output: `
                    <div style="margin-top:2rem">
                        <p style="margin-bottom:0.5em">Unordered Grocery List:</p>
                        <ul style="list-style:disc;padding-left:2em;margin-bottom:1.5em">
                            <li>Apples</li>
                            <li>Bananas</li>
                            <li>Carrots</li>
                        </ul>
                        <p style="margin-bottom:0.5em">Ordered Steps:</p>
                        <ol style="padding-left:2em">
                            <li>Boil water.</li>
                            <li>Add pasta.</li>
                            <li>Wait 10 minutes.</li>
                        </ol>
                    </div>
                `,
                hasChart: false
            },
            {
                id: 'math',
                num: '06',
                title: 'Mathematics',
                introText: 'The true power of LaTeX lies in its ability to typeset complex mathematical formulas effortlessly. This is why it is universally adopted in mathematics and physics.',
                content: `
                    <div class="lesson-body">
                        <p class="drop-cap">
                            There are two main modes for math in LaTeX:
                        </p>
                        <p>
                            <strong>1. Inline Math:</strong> Formulas that appear within the text of a paragraph. Enclose them in single dollar signs <code>$ ... $</code>.
                        </p>
                        <p>
                            <strong>2. Display Math:</strong> Formulas that appear on their own centered line. Enclose them in <code>\\[ ... \\]</code> or use the <code>equation</code> environment.
                        </p>
                    </div>
                `,
                code: `\\documentclass{article}
\\begin{document}

In physics, the mass-energy equivalence
is stated by the famous equation
$E = mc^2$, discovered in 1905.

The formula for the roots of a quadratic
equation is displayed below:

\\[ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\]

Superscripts use ^ and subscripts use _.
Fractions use \\frac{numerator}{denominator}.

\\end{document}`,
                output: `
                    <div style="margin-top:2rem;line-height:1.8;text-align:justify">
                        <p style="margin-bottom:1em">In physics, the mass-energy equivalence is stated
                        by the famous equation <i>E = mc<sup>2</sup></i>, discovered in 1905.</p>
                        <p style="margin-bottom:1em">The formula for the roots of a quadratic
                        equation is displayed below:</p>
                        <div style="text-align:center;font-size:1.25em;margin:1.2em 0">
                            <i>x = <span style="display:inline-block;vertical-align:middle;text-align:center"><span style="border-bottom:1px solid #1a1a1a;display:block;padding-bottom:2px">−b ± √(b<sup>2</sup> − 4ac)</span><span style="display:block;padding-top:2px">2a</span></span></i>
                        </div>
                        <p>Superscripts use ^ and subscripts use _.
                        Fractions use \\frac{numerator}{denominator}.</p>
                    </div>
                `,
                hasChart: false
            },
            {
                id: 'structure',
                num: '07',
                title: 'Document Structure',
                introText: 'For longer documents, you need to organize your content into sections, subsections, and paragraphs. LaTeX automatically numbers these sections for you.',
                content: `
                    <div class="lesson-body">
                        <p class="drop-cap">
                            Use commands like <code>\\section{}</code>, <code>\\subsection{}</code>, and <code>\\paragraph{}</code>. A new paragraph is created by leaving a blank line in the code. Do not use multiple slashes <code>\\\\</code> to make space!
                        </p>
                    </div>
                `,
                code: `\\documentclass{article}
\\begin{document}

\\section{Introduction}
This is the first section. Notice the
automatic numbering.

\\subsection{Background}
Here is some background information.

\\section{Methodology}
A new paragraph begins when there is a
blank line in the code editor.

Like this! This is a completely new
paragraph. LaTeX handles the indentation
automatically.

\\end{document}`,
                output: `
                    <div style="margin-top:2rem">
                        <h2 style="font-size:1.3rem;font-weight:bold;margin-bottom:0.4rem;margin-top:1.5rem">1 &nbsp;Introduction</h2>
                        <p style="text-indent:2em;text-align:justify;margin-bottom:0.8em">This is the first section. Notice the automatic numbering.</p>

                        <h3 style="font-size:1.1rem;font-weight:bold;margin-bottom:0.4rem;margin-top:1rem">1.1 &nbsp;Background</h3>
                        <p style="text-indent:2em;text-align:justify;margin-bottom:0.8em">Here is some background information.</p>

                        <h2 style="font-size:1.3rem;font-weight:bold;margin-bottom:0.4rem;margin-top:1.5rem">2 &nbsp;Methodology</h2>
                        <p style="text-indent:2em;text-align:justify;margin-bottom:0.8em">A new paragraph begins when there is a blank line in the code editor.</p>
                        <p style="text-indent:2em;text-align:justify">Like this! This is a completely new paragraph. LaTeX handles the indentation automatically.</p>
                    </div>
                `,
                hasChart: false
            },
            {
                id: 'thankyou',
                num: '08',
                title: 'Thank You',
                introText: 'You have reached the end of this interactive crash course. Congratulations on taking the first step into the world of LaTeX!',
                content: `
                    <div class="lesson-body">
                        <p class="drop-cap">Thank you for taking the time to go through this lesson. We hope it has given you a solid foundation for creating beautifully typeset documents with LaTeX. The skills you have begun to develop here will serve you throughout your academic and professional career.</p>
                        <h3>Questions & Discussion</h3>
                        <p>Do you have any questions about the material we covered? Now is the perfect time to ask! Whether it's about document structure, mathematical typesetting, formatting, or anything else—no question is too small or too basic. Let's discuss.</p>
                        <h3>About This Lesson</h3>
                        <p>This content was authored and this interactive page was designed by <strong>Farid Nahadi Muigu</strong>.</p>
                        
                        <h3>Additional Resources</h3>
                        <p>You can download the PDF version of this lesson for offline reference.</p>
                        <a href="LaTeX_Beginners_Lesson_Preparation.pdf" download class="download-btn">Download PDF Lesson</a>

                        <p style="margin-top:2rem;color:var(--color-navy);font-family:var(--font-display);font-size:1.3rem;font-style:italic;">"The best way to learn LaTeX is to start writing with it."</p>
                    </div>
                `,
                hasChart: false
            }
        ];

        /* ────────────────────────────────
           STATE
        ──────────────────────────────── */
        let currentLessonId = 'intro';
        let chartInstance = null;

        /* ────────────────────────────────
           SIDEBAR NAV
        ──────────────────────────────── */
        function initNav() {
            const nav = document.getElementById('nav-container');
            nav.innerHTML = '';

            appData.forEach(lesson => {
                const btn = document.createElement('button');
                btn.className = `nav-link${lesson.id === currentLessonId ? ' active' : ''}`;
                btn.innerHTML = `<span class="nav-number">${lesson.num}</span><span class="nav-title">${lesson.title}</span>`;
                btn.addEventListener('click', () => {
                    currentLessonId = lesson.id;
                    updateApp();
                    closeMobileNav();
                });
                nav.appendChild(btn);
            });
        }

        /* ────────────────────────────────
           RENDER CONTENT
        ──────────────────────────────── */
        function renderContent() {
            const container = document.getElementById('content-scroll');
            const lesson = appData.find(l => l.id === currentLessonId);
            if (!lesson) return;

            let html = `
                <div class="lesson-header anim-in anim-delay-1">
                    <div class="lesson-chapter">Chapter ${lesson.num}</div>
                    <h1 class="lesson-title">${lesson.title}</h1>
                    <p class="lesson-intro">${lesson.introText}</p>
                </div>

                <div class="anim-in anim-delay-2">
                    ${lesson.content}
                </div>
            `;

            if (lesson.code && lesson.output) {
                html += `
                    <div class="panels anim-in anim-delay-3">
                        <div class="panel panel-code">
                            <div class="panel-header">
                                <span>main.tex</span>
                                <span>Source</span>
                            </div>
                            <div class="panel-body">${lesson.code}</div>
                        </div>
                        <div class="panel panel-output">
                            <div class="panel-header">
                                <span>Preview</span>
                                <span>Compiled</span>
                            </div>
                            <div class="panel-body">${lesson.output}</div>
                        </div>
                    </div>
                `;
            }

            const idx = appData.findIndex(l => l.id === currentLessonId);
            const prevLesson = idx > 0 ? appData[idx - 1] : null;
            const nextLesson = idx < appData.length - 1 ? appData[idx + 1] : null;

            html += `
                <div class="chapter-nav anim-in anim-delay-4">
                    <button class="chapter-nav-link ${!prevLesson ? 'chapter-nav-hidden' : ''}" id="prevBtn">
                        <span class="arrow arrow-left">←</span> ${prevLesson ? prevLesson.title : ''}
                    </button>
                    <button class="chapter-nav-link ${!nextLesson ? 'chapter-nav-hidden' : ''}" id="nextBtn">
                        ${nextLesson ? nextLesson.title : ''} <span class="arrow arrow-right">→</span>
                    </button>
                </div>
            `;

            container.innerHTML = html;

            /* Wire nav buttons */
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            if (prevLesson) {
                prevBtn.addEventListener('click', () => {
                    currentLessonId = prevLesson.id;
                    updateApp();
                });
            }
            if (nextLesson) {
                nextBtn.addEventListener('click', () => {
                    currentLessonId = nextLesson.id;
                    updateApp();
                });
            }

            if (lesson.hasChart) renderChart();
        }

        /* ────────────────────────────────
           CHART
        ──────────────────────────────── */
        function renderChart() {
            const ctx = document.getElementById('introChart');
            if (!ctx) return;
            if (chartInstance) chartInstance.destroy();

            chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Short Document', 'Medium Document', 'Complex Thesis'],
                    datasets: [
                        {
                            label: 'Word Processor',
                            data: [10, 40, 80],
                            backgroundColor: 'rgba(224, 122, 95, 0.75)',
                            borderColor: 'rgb(224, 122, 95)',
                            borderWidth: 1,
                            borderRadius: 2
                        },
                        {
                            label: 'LaTeX',
                            data: [30, 35, 40],
                            backgroundColor: 'rgba(13, 27, 42, 0.7)',
                            borderColor: 'rgb(13, 27, 42)',
                            borderWidth: 1,
                            borderRadius: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                font: { family: "'Source Sans 3', sans-serif", size: 13 },
                                padding: 16
                            }
                        },
                        tooltip: { mode: 'index', intersect: false }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Effort / Time (Arbitrary Units)',
                                font: { family: "'Source Sans 3', sans-serif", size: 12, weight: 300 }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' },
                            ticks: { font: { family: "'Source Sans 3', sans-serif" } }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { font: { family: "'Source Sans 3', sans-serif" } }
                        }
                    }
                }
            });
        }

        /* ────────────────────────────────
           MOBILE NAV
        ──────────────────────────────── */
        function openMobileNav() {
            document.getElementById('sidebar').classList.add('open');
            document.getElementById('sidebar-overlay').classList.add('open');
        }

        function closeMobileNav() {
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('sidebar-overlay').classList.remove('open');
        }

        document.getElementById('hamburger-btn').addEventListener('click', openMobileNav);
        document.getElementById('sidebar-overlay').addEventListener('click', closeMobileNav);

        /* ────────────────────────────────
           SIDEBAR TOGGLE (Desktop)
        ──────────────────────────────── */
        document.getElementById('sidebar-collapse').addEventListener('click', () => {
            document.getElementById('sidebar').classList.add('collapsed');
        });

        document.getElementById('sidebar-reopen').addEventListener('click', () => {
            document.getElementById('sidebar').classList.remove('collapsed');
        });

        /* ────────────────────────────────
           UPDATE
        ──────────────────────────────── */
        function updateApp() {
            initNav();
            renderContent();
            document.getElementById('main-content').scrollTo({ top: 0, behavior: 'smooth' });
        }

        document.addEventListener('DOMContentLoaded', updateApp);
