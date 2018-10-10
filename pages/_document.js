import Document, {Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
            <Head>
                <title>Deviget challenger</title>
                <link rel="stylesheet" href="/_next/static/style.css"/>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,600,500" rel="stylesheet"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        );
    }
}
