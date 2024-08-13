export default function parseText(text) {
  const regex =
    /<sh>(.*?)<sh>|<par>(.*?)<par>|<ls>(.*?)<ls>|<img>(.*?)<img>|<vid>(.*?)<vid>/g;
  let match = [];
  const result = [];
  while ((match = regex.exec(text)) !== null) {
    if (match[0].startsWith("<img>"))
      result.push({ text: match[4] || "", type: "img" });
    else if (match[1]) result.push({ text: match[1], type: "subheading" });
    else if (match[2]) result.push({ text: match[2], type: "paragraph" });
    else if (match[3]) result.push({ text: match[3], type: "list" });
    else if (match[5]) result.push({ text: match[5], type: "video" });
  }
  // console.log(result);
  return result;
}
