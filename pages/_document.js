import Document, { Html, Head, Home, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return <Html lang="ja" />;
  }
}

export default MyDocument;
