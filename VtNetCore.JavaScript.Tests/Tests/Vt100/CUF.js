﻿function getTestInformation() {
    return {
        "name": "CUF—Cursor Forward",
        "features": "CUF",
        "links": [
            "https://vt100.net/docs/vt510-rm/CUF.html"
        ],
        "authors": [
            "Darren Starr <submux@hotmail.com>"
        ],
        "standards": [
            "VT100"
        ],
        "notes": ""
    };
}

function executeTest() {
    log.info("Test: " + getTestInformation().name);

    let curses = new Curses();

    var terminal = host.newObj(Terminal);
    terminal.resizeView(80, 25);
    terminal.push(curses.CUD().CUD(3).CUD(0).getData());

    let ok = true;

    terminal.push(curses.CUF().getData());
    ok = TerminalHelpers.checkPosition(terminal, ok, 5, 1);

    terminal.push(curses.CUF(3).getData());
    ok = TerminalHelpers.checkPosition(terminal, ok, 5, 4);

    terminal.push(curses.CUF(0).getData());
    ok = TerminalHelpers.checkPosition(terminal, ok, 5, 5);

    log.status("Passed?: " + ok);

    return ok;
}
