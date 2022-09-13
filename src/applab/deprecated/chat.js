var userSettings = {
  role: "",
  defaultRole: "User",
  logged: false,
  username: "",
  banned: false,
};
var collectedUsername = "";
var chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var usernameLength = 12;
var username = "";
// Display everyones username in the console. //
function displayUsernames(YourAdminID) {
  if (getUserId() == YourAdminID) {
    readRecords("Accounts", {}, function (records) {
      if (records.length > 0) {
        for (var i = 0; i < records.length; i++) {
          console.log(records[i].username);
        }
      }
    });
  } else {
    console.log("User Tried Issuing an Admin Command.");
    console.log(getUserId());
  }
}
// Generate an Random username //
function randomUsernameGenerator() {
  for (var i = 0; i <= usernameLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);

    username += chars.substring(randomNumber, randomNumber + 1);
  }

  console.log(username);
}
// Grab that Random Username //
function randomUsernameGrab(YourVariable) {
  YourVariable = username;

  console.log(YourVariable);
}
// Clear Chat //
function chatClear() {
  readRecords("Chat", {}, function (rec) {
    var x = 0;

    createRecord("Chat", { sender: "Clearing The Chat!" }, function () {});

    timedLoop(100, function () {
      deleteRecord("Chat", { id: rec[x].id }, function () {});
      x++;
      if (x == rec.length) {
        stopTimedLoop();

        createRecord(
          "Chat",
          { sender: "Chat Completely Cleared!" },
          function () {}
        );
      }
    });
  });
}
// Set the Screen to an banned screen //
function banShow(YourBanScreen) {
  readRecords("Accounts", { userId: getUserId() }, function (rec) {
    if (rec[0].banned == true) {
      setScreen(YourBanScreen);
    }
  });
}
// SignUp //
function signUpCall(usernameInput, YourLabel, YourMainScreen, UserDatabase) {
  collectedUsername = getText(usernameInput);

  if (collectedUsername.length < 4) {
    setText(YourLabel, "Username is too short!");
  } else if (collectedUsername.length > 32) {
    setText(YourLabel, "Username is too long!");
  } else {
    readRecords(
      UserDatabase,
      { username: collectedUsername.substring(0, 32) },
      function (rec) {
        if (rec.length > 0) {
          setText(YourLabel, "Username is Already Taken.");
        } else {
          userSettings.role = userSettings.defaultRole;
          userSettings.logged = true;
          userSettings.username = getText(usernameInput);

          createRecord(
            UserDatabase,
            {
              userId: getUserId(),
              username: collectedUsername.substring(0, 32),
              role: userSettings.role,
              banned: false,
            },
            function () {
              setScreen(YourMainScreen);
            }
          );
        }
      }
    );
  }
}
// Login //
function login(YourScreen, YourLoginButton, YourSignUpButton, UserDatabase) {
  readRecords(UserDatabase, { userId: getUserId() }, function (rec) {
    if (rec.length > 0) {
      hideElement(YourLoginButton);
      hideElement(YourSignUpButton);

      userSettings.username = rec[0].username;
      userSettings.role = rec[0].role;
      userSettings.banned = rec[0].banned;
      userSettings.logged = true;

      console.log(userSettings.logged);
    } else {
      setScreen(YourScreen);
    }
  });
}
// Send an Message in chat //
function chatSend(YourMessageInput, ChatDatabase) {
  var messageSender = getText(YourMessageInput);

  createRecord(
    ChatDatabase,
    {
      sender:
        "{" +
        userSettings.role +
        "} " +
        userSettings.username +
        ": " +
        messageSender,
      user: getUserId(),
    },
    function () {
      setText(YourMessageInput, "");
    }
  );
}
// Read Chat //
function chatRead(YourChatList, ChatDatabase) {
  setText(YourChatList, "");

  readRecords(ChatDatabase, {}, function (rec) {
    for (var i = 0; i < rec.length; i++) {
      setText(YourChatList, rec[i].sender + "\n" + getText(YourChatList));
    }
  });
}
// When Chat is clicked //
function chatClick(YourChatScreen, ChatDatabase) {
  setScreen(YourChatScreen);

  createRecord(
    ChatDatabase,
    { sender: "{Bot} Companion: " + userSettings.username + " Has joined." },
    function () {}
  );
}
