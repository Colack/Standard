// Project can be found at 'https://studio.code.org/projects/applab/whRTFEykeUR9OSLzojMPsA1P77F0hZWWwcGW4vyhKTE'

create("test", true, true, "Yes", 100, 100, 100, 100, "blue", "test", "screen1");

function create(name, deleteable, moveable, text, x, y, width, height, background, screenName, screen) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.clicked = false;
    this.background = background;
    this.screenName = screenName;
    this.screen = screen;

    textLabel(this.name, "");
    setPosition(this.name, x, y, width, height);
    setProperty(this.name, "background-color", background);

    textLabel(this.name + "l", "");
    if (this.height > 100) {
      setPosition(this.name + "l", x, y, width, 20);
    } else {
      setPosition(this.name + "l", x, y, width, height / 5);
    }
    setProperty(this.name + "l", "background-color", "grey");

    textLabel(this.name + "n", text);
    setPosition(this.name + "n", x, y);
    setProperty(this.name + "n", "text-color", "white");

    onEvent(this.name + "l", "click", function() {
        if (!this.clicked) {
            if (moveable) {
              setProperty(this.name + "l", "background-color", "red");
              setTimeout(function() {
                this.clicked = true;
              }, 250);
            }
        } else if (this.clicked) {
          if (deleteable) {
            deleteElement(this.name);
            deleteElement(this.name + "l");
            deleteElement(this.name + "n");
            this.clicked = false;
          }
        }
    });

    onEvent(this.screenName, "click", function(event) {
        if (this.clicked) {
            if (moveable) {
              this.clicked = false;
              setProperty(this.name + "l", "background-color", "grey");
              setPosition(this.name, event.x, event.y);
              setPosition(this.name + "l", event.x, event.y);
              setPosition(this.name + "n", event.x, event.y);
            }
        }
    });
    
    onEvent(this.screen, "click", function(event) {
      if (this.clicked) {
            if (moveable) {
              this.clicked = false;
              setProperty(this.name + "l", "background-color", "grey");
              setPosition(this.name, event.x, event.y);
              setPosition(this.name + "l", event.x, event.y);
              setPosition(this.name + "n", event.x, event.y);
            }
        }
    });

}
