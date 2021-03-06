class ExampleMetadata {
    constructor() {
        this.exampleUrls = [
            "example1.html",
            "example2.html",
            "example3.html",
            "example4.html",
            "example5.html",
            "example6.html",
            "example7.html",
            "example8.html",
        ];
        this.exampleDescs = [
            "WebGL Basic Code",
            "LibXOR Basic Code",
            "Popping Blocks",
            "Ray Tracer",
            "Windy Blocks"
        ];
        this.numExamples = this.exampleDescs.length;
        this.courseNumber = "CS F482/F680";
        this.courseName = "Computer Graphics Animation & Simulation";
        this.courseSemester = "Spring 2019";
        this.pageAuthor = "Jonathan Metzgar";
        this.pageTitle = this.courseName;
        this.pageSubtitle = this.courseNumber + " Examples";

        this.isLocalHost = window.location.href.search("localhost") >= 0 ? true : false;
        let loc = window.location.pathname.search(".html");
        if (isFinite(loc)) {
            let count = 0;
            for (let i = loc-1; i >= 0; i--) {
                let c = window.location.pathname.charAt(i);
                if (c < '0' || c > '9') break;
                loc = i;
                count++;
            }
            loc = parseInt(window.location.pathname.substr(loc, count));
        }
        this.isMainIndex = window.location.pathname.search("examples.html") >= 0 ? true : false;
        // perhaps we could not find index.html
        if (!this.isMainIndex && !isFinite(loc)) {
            this.isMainIndex = true;
        }
        this.exampleNum = loc;
    }

    write(text) {
        let d = document;
        d.write(text);
    }

    writeln(text) {
        let d = document;
        d.writeln(text);
    }

    getProjectName(i) {
        let j = i || 0;
        if (j == 0) j = this.exampleNum - 1;
        if (j >= 0 && j < this.exampleDescs.length) {
            return this.exampleDescs[j];
        }
        return "Unknown Example";
    }

    writeIndex() {
        if (this.isMainIndex) {
            this.writeMainIndex();
        }
    }

    writeMainIndex() {
        let exampleUrls = this.exampleUrls;
        let exampleDescs = this.exampleDescs;

        this.write("<table style='margin: auto;'>");
        let count = 3 * ((exampleDescs.length / 3 | 0) + ((exampleDescs.length % 3 != 0) ? 1 : 0));
        for (let i = 0; i < count; i++) {
            let exampleStem = "example" + (i+1).toString();
            if (i % 3 == 0) this.write("<tr>");
            this.write("<td style='width: 30%;' align='center'>");
            if (i < exampleDescs.length) {
                this.write("<a href='examples/" + exampleUrls[i] + "'>");
                this.write("<img style='border-radius: 4px; width: 90%;' src='examples/" + exampleStem + "-thumbnail.png' onerror=\"this.src='assets/default-thumbnail.png'\" />");
                this.write("<br />");
                this.write(exampleDescs[i] + "</a>");
            }

            this.write("</td>");
            if (i % 3 == 2) this.writeln("</tr>");
        }
        this.write("</table>");
    }

    writeArticleHeader() {
        this.writeln('<header>');
        this.writeTitle();
        this.writeSubtitle();
        this.writeln('<hr class="goldhr" />');
        this.writeln('</header>');
    }

    writeArticleFooter() {
        this.writeln('<footer>');
        this.writeln("<footer style='text-align: center;'>");
        if (this.exampleNum > 1) {
            this.write("<< <a href=\"example" + (this.exampleNum - 1) +
                ".html\">Example " + (this.exampleNum - 1) + "</a> | ");
        }
        if (!this.isMainIndex) {
            this.writeln("<a href='../examples.html'>Back to Index</a>");
            if (this.isStudentPage) {
                let uplink = "<a href='../example" + this.exampleNum + ".html'>Up</a>";
                this.writeln(" | " + uplink);
            }
        } else {
            this.writeln("<a href='../index.html'>Back to Course Index</a>");
        }
        if (!this.isMainIndex && this.exampleNum < this.numExamples) {
            this.write("| <a href=\"example" + (this.exampleNum + 1) +
                ".html\">Example " + (this.exampleNum + 1) + "</a> >>");
        }
        this.writeln('<hr class="bluehr" />');
        this.writeln('<p style="font-size: 0.5em;">UA is an AA/EO employer and educational institution and prohibits illegal discrimination against any individual: <a href="https://www.alaska.edu/nondiscrimination">www.alaska.edu/nondiscrimination</a>.</p>');
        this.writeln('</footer>');
    }

    writeTitle() {
        let h1 = "<h1><a href='index.html'>" + this.pageTitle + "</a></h1>";
        if (this.isMainIndex) {
            h1 = "<h1><a href='index.html'>" + this.pageTitle + "</a></h1>";
        } else {
            h1 = "<h1><a href='../examples.html'>" + this.exampleNum + " " + this.getProjectName() + "</a></h1>";
        }
        this.write(h1);
    }

    writeSubtitle() {
        if (!this.isMainIndex) return;
        let h2 = "<h2>" + this.pageSubtitle + "</h2>";
        this.write(h2);
    }

    writeDesc() {
        if (!this.isMainIndex) return;
        this.write("<p>" + this.courseDesc + "</p>");
    }

    writeHeadTitle() {
        let optional = (this.pageAuthor.length) ? " (" + this.pageAuthor + ")" : "";
        let title = "<title>" + this.pageTitle + optional + "</title>";
        this.write(title);
    }

    writeHeader(pageTitle, pageAuthor) {
        let optional = (this.pageAuthor.length) ? " (" + this.pageAuthor + ")" : "";
        let link = (this.isMainIndex) ? "'../index.html'>" : "'index.html'>";
        let a = "<a href=" + link + this.pageTitle + optional + "</a>";
        this.write(a);
    }
}