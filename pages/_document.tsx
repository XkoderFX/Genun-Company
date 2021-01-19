import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body dir="rtl">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
