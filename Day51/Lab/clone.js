const DocumentPrototype = {
  clone() {
    const newDoc = Object.create(this);

    newDoc.header = this.header;
    newDoc.footer = this.footer;
    newDoc.pages = [...this.pages];
    newDoc.text = [...this.text];
    return newDoc;
  },
  getData() {
    return {
      header: this.header,
      footer: this.footer,
      pages: this.pages,
      text: this.text,
    };
  },
};

const originalDoc = Object.create(DocumentPrototype);
originalDoc.header = "Company Report 2025";
originalDoc.footer = "Confidential";
originalDoc.pages = ["Page 1", "Page 2", "Page 3"];
originalDoc.text = ["This", "is", "the", "original", "document."];

console.log("Original Document:");
console.log(originalDoc.getData());

const clonedDoc = originalDoc.clone();
clonedDoc.header = "Company Report 2025 - Copy";
clonedDoc.pages.push("Page 4");
clonedDoc.text[4] = "copy.";

console.log("Cloned Document:");
console.log(clonedDoc.getData());
console.log("Original Document (After Cloning):");
console.log(originalDoc.getData());
