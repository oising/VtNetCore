﻿function getTestInformation() {
    return {
        "name": "CUD—Cursor Down",
        "features": "CUD",
        "links": [
            "https://vt100.net/docs/vt510-rm/CUD.html"
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

    let ok = true;

    terminal.push(curses.CUD().getData());
    ok = TerminalHelpers.checkPosition(terminal, ok, 1, 0);

    terminal.push(curses.CUD(3).getData());
    ok = TerminalHelpers.checkPosition(terminal, ok, 4, 0);

    terminal.push(curses.CUD(0).getData());
    ok = TerminalHelpers.checkPosition(terminal, ok, 5, 0);

    log.status("Passed?: " + ok);

    return ok;
}
