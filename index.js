var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var lengthOfLine = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${lengthOfLine} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for(var i=0; i < katzDeliLine.length; i++) {
      var listInfo = "";
      listInfo = listInfo + (katzDeliLine.length + 1
    }
    return `The line is currently: ${listInfo}`;
  }
}
