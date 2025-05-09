function heartWithArrowPierced() {
  const n = 6;

  // Upper heart
  for (let i = n / 2; i <= n; i += 2) {
    let line = "";

    // Left padding
    for (let j = 1; j < n - i; j += 2) {
      line += " ";
    }

    // Left lobe
    for (let j = 1; j <= i; j++) {
      line += "*";
    }

    // Center space
    for (let j = 1; j <= n - i; j++) {
      line += " ";
    }

    // Right lobe
    for (let j = 1; j <= i; j++) {
      line += "*";
    }

    // Arrow tail through heart (on 2nd row)
    if (i === n / 2 + 1) {
      line += " -->";
    }

    console.log(line);
  }

  // Bottom triangle
  for (let i = n; i >= 1; i--) {
    let line = "";

    // Left padding
    for (let j = 0; j < n - i; j++) {
      line += " ";
    }

    // Bottom part
    for (let j = 1; j <= i * 2 - 1; j++) {
      line += "*";
    }

    // Arrow continues on middle row
    if (i === Math.floor(n / 2)) {
      line += " -->";
    }

    console.log(line);
  }
}

heartWithArrowPierced();
