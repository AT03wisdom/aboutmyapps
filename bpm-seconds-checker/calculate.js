let decimal = 2;

function switchDecimal() {
  const decimalRadio = document.getElementsByName("decimal")
  for (var i = 0; i < decimalRadio.length; i++) {
    if (decimalRadio.item(i).checked) {
      decimal = i;
      break;
    }
  }
}

function onCalculateButton() {
  switchDecimal();

  const bpmObject = document.getElementById("bpm").value;
  const bpm = parseFloat(bpmObject)

  if (!isNaN(bpm) && bpm > 0) {
    const oneBeat = 60 / bpm;

    // BPM150からの変更率
    const changeRateText = document.getElementById("changeRate");
    const changeRate = 100 * (bpm/150 - 1) // 変更前bpm/変更後bpm
    const changeRateRounded = changeRate.toFixed(3);
    changeRateText.innerHTML = "※BPM150からの変更率：" + String(changeRateRounded)+" %";

    // 0.125拍
    const the32ndText = document.getElementById("the32ndNoteSecond");
    const the32ndSecond = oneBeat * 0.125
    const the32ndSecondRounded = the32ndSecond.toFixed(decimal);
    the32ndText.innerHTML = String(the32ndSecondRounded)+"秒";

    // 0.25拍
    const the16thText = document.getElementById("the16thNoteSecond");
    const the16thSecond = oneBeat * 0.25
    const the16thSecondRounded = the16thSecond.toFixed(decimal);
    the16thText.innerHTML = String(the16thSecondRounded)+"秒";

    // 0.375拍
    const the16thDotText = document.getElementById("the16thDotNoteSecond");
    const the16thDotSecond = oneBeat * 0.375
    const the16thDotSecondRounded = the16thDotSecond.toFixed(decimal);
    the16thDotText.innerHTML = String(the16thDotSecondRounded)+"秒";

    // 0.5拍
    const eighthText = document.getElementById("eighthNoteSecond");
    const eighthSecond = oneBeat * 0.5
    const eighthSecondRounded = eighthSecond.toFixed(decimal);
    eighthText.innerHTML = String(eighthSecondRounded)+"秒";

    // 0.75拍
    const eighthDotText = document.getElementById("eighthDotNoteSecond");
    const eighthDotSecond = oneBeat * 0.75
    const eighthDotSecondRounded = eighthDotSecond.toFixed(decimal);
    eighthDotText.innerHTML = String(eighthDotSecondRounded)+"秒";

    // 1拍
    const quarText = document.getElementById("quarNoteSecond");
    const quarSecond = oneBeat // いらないが、コピペ用に残している
    const quarSecondRounded = quarSecond.toFixed(decimal);
    quarText.innerHTML = String(quarSecondRounded)+"秒";

    // 1.5拍
    const quarDotText = document.getElementById("quarDotNoteSecond");
    const quarDotSecond = oneBeat * 1.5
    const quarDotSecondRounded = quarDotSecond.toFixed(decimal);
    quarDotText.innerHTML = String(quarDotSecondRounded)+"秒";

    // 2拍
    const halfText = document.getElementById("halfNoteSecond");
    const halfSecond = oneBeat * 2
    const halfSecondRounded = halfSecond.toFixed(decimal);
    halfText.innerHTML = String(halfSecondRounded)+"秒";

    // 3拍
    const halfDotText = document.getElementById("halfDotNoteSecond");
    const halfDotSecond = oneBeat * 3
    const halfDotSecondRounded = halfDotSecond.toFixed(decimal);
    halfDotText.innerHTML = String(halfDotSecondRounded)+"秒";

    // 4拍（4/4拍子における一小節）
    const wholeText = document.getElementById("wholeNoteSecond");
    const wholeSecond = oneBeat * 4
    const wholeSecondRounded = wholeSecond.toFixed(decimal);
    wholeText.innerHTML = String(wholeSecondRounded)+"秒";

    // 2小節
    const twoBarText = document.getElementById("twoBarSecond");
    const twoBarSecond = oneBeat * 8
    const twoBarSecondRounded = twoBarSecond.toFixed(decimal);
    twoBarText.innerHTML = String(twoBarSecondRounded)+"秒";

    // 3小節
    const threeBarText = document.getElementById("threeBarSecond");
    const threeBarSecond = oneBeat * 12
    const threeBarSecondRounded = threeBarSecond.toFixed(decimal);
    threeBarText.innerHTML = String(threeBarSecondRounded)+"秒";

    // 4小節
    const fourBarText = document.getElementById("fourBarSecond");
    const fourBarSecond = oneBeat * 16
    const fourBarSecondRounded = fourBarSecond.toFixed(decimal);
    fourBarText.innerHTML = String(fourBarSecondRounded)+"秒";

    // 8小節
    const eightBarText = document.getElementById("eightBarSecond");
    const eightBarSecond = oneBeat * 32
    const eightBarSecondRounded = eightBarSecond.toFixed(decimal);
    eightBarText.innerHTML = String(eightBarSecondRounded)+"秒";

  } else {
    alert("bpm: "+String(bpm)+" 正の数を入力してください。");
  }
}
