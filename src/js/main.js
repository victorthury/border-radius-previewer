function getElementValue(elementId) {
  const elementValue = document
    .querySelector(elementId)
    .value
    ? document.querySelector(elementId).value
    : 0;
  return elementValue
}

function getBorderRadiusInputValuesString() {
  
  const borderRadiusArray = [
    getElementValue('#top-left'),
    getElementValue('#top-right'),
    getElementValue('#bottom-right'),
    getElementValue('#bottom-left'),
  ];
  return borderRadiusArray;
}

function addPxToBorderRadiusValue(borderRadiusValue) {
  return (
    Number(borderRadiusValue) > 0
    ? `${borderRadiusValue}px`
    : borderRadiusValue
  );
}

function mountBorderRadiusString(borderRadiusValuesArray) {
  let borderRadius = 'border-radius:';

  borderRadiusValuesArray.forEach(value => {
    borderRadius = `${borderRadius} ${addPxToBorderRadiusValue(value)}`
  });
  borderRadius = `${borderRadius};`

  return borderRadius
}


function getBorderRadiusString(event) {
  const id = event.id;
  const value = event.value;
  const borderRadiusArray = getBorderRadiusInputValuesString();
  const borderRadiusString = mountBorderRadiusString(borderRadiusArray);
  console.log(borderRadiusString);
  document.querySelector('.border-radius-box').style = borderRadiusString;
  document.querySelector('.border-radius-css-code').textContent = borderRadiusString;

  if (value === '') {
    document.querySelector(`#${id}`).value = 0;
  }
}

function copyToClipboard() {
  const cssCode = document.querySelector('.border-radius-css-code');
  navigator.clipboard.writeText(cssCode.textContent);
  alert('Border-radius code was added to clipboard');
}
