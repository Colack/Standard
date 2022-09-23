var Database = /** @class */ (function () {
    function Database(memory, user, limit, id, color, fg) {
        this.bannedUsers = [];
        this.memory = memory || "messages";
        this.user = user;
        this.limit = limit || 10;
        this.id = id;
        this.color = color;
        this.fg = fg;
    }
    Database.prototype.message = function (msg, limit) {
        var _this = this;
        this.sync(function () {
            var msgs = [];
            limit = limit || 50;
            for (var i = 0; i < msg.length / limit; i++) {
                msgs.push(msg.substring(i * limit, (i + 1) * limit));
            }
            for (var i = 0; i < msgs.length; i++) {
                _this.local.push({
                    user: _this.user,
                    username: _this.user,
                    msg: msgs[i],
                    message: msgs[i],
                    id: _this.id,
                    userid: _this.id,
                    color: _this.color,
                    clr: _this.color,
                    time: Math.floor(random(Date.now())),
                    fg: _this.fg
                });
            }
            if (_this.local.length > _this.limit) {
                _this.local.splice(0, msgs.length);
            }
            _this.write(_this.local);
        });
    };
    Database.prototype.bmessage = function (msg, limit) {
        var _this = this;
        limit = limit || this.limit;
        this.sync(function () {
            getKeyValue("chatlength", function (length) {
                var l = length || 0;
                if (l >= limit) {
                    l -= 1;
                    _this.local = _this.local.replace(/.*\s+/, "");
                }
                _this.write(_this.local + "\n".concat((_this.user || ""), ": ") + msg);
                setKeyValue("chatlength", l + 1);
            });
        });
    };
    Database.prototype.read = function (callback, table) {
        getKeyValue(table || this.memory, function (value) {
            if (typeof callback === 'function') {
                callback(value);
            }
            else {
                console.log(value);
            }
        });
    };
    Database.prototype.write = function (data, callback, table) {
        setKeyValue(table || this.memory, data, function (value) {
            if (typeof callback === 'function') {
                callback(value);
            }
        });
    };
    Database.prototype.sync = function (callback, key) {
        var self = this;
        key = key || this.memory;
        getKeyValue(key, function (value) {
            self.local = value;
            if (typeof callback == 'function') {
                callback(true);
            }
        });
    };
    Database.prototype.edit = function (index, property, data, dataset) {
        var _this = this;
        this.sync(function () {
            _this.local[index][property] = data;
            _this.write(_this.local || dataset);
        });
    };
    Database.prototype.clear = function () {
        this.local = [];
        this.write(this.local);
    };
    Database.prototype.spam = function (message, ms) {
        var self = this;
        setInterval(function () {
            self.message("> ".concat(message));
        }, 100 || ms);
    };
    Database.prototype.lifetime = function (ms) {
        var self = this;
        setInterval(function () {
            self.sync(function () {
                self.local.shift();
                self.write(self.local);
            });
        }, 10000 || ms);
    };
    Database.prototype.announce = function (message) {
        var _this = this;
        this.sync(function () {
            for (var _i = 0, _a = _this.local; _i < _a.length; _i++) {
                var local = _a[_i];
                local.msg = local.message = message;
            }
            _this.write(_this.local);
        });
    };
    Database.prototype.named = function (user) {
        var _this = this;
        this.sync(function () {
            for (var _i = 0, _a = _this.local; _i < _a.length; _i++) {
                var local = _a[_i];
                local.user = local.username = user;
            }
            _this.write(_this.local);
        });
    };
    Database.prototype.strobe = function (ms, name) {
        var self = this;
        var user = name || this.user;
        setInterval(function () {
            self.sync(function () {
                var nclr = "#" + hex(randomNumber(0, 0xFFFFFF)).substring(2, 8);
                for (var _i = 0, _a = self.local; _i < _a.length; _i++) {
                    var local = _a[_i];
                    if (local.username == user || local.user == user) {
                        local.color = nclr;
                        local.clr = nclr;
                    }
                }
                ;
                self.write(self.local);
            });
        }, ms || 9000);
    };
    Database.prototype.colorize = function (clr, ms) {
        var self = this;
        setInterval(function () {
            self.sync(function () {
                for (var _i = 0, _a = self.local; _i < _a.length; _i++) {
                    var local = _a[_i];
                    local.color = local.clr = clr;
                }
                ;
                self.write(self.local);
            });
        }, ms || 1000);
    };
    Database.prototype.typewritter = function (nam, id, ms) {
        var self = this;
        var _pos = 0;
        var _dir = 1;
        setInterval(function () {
            _pos += _dir;
            if (abs(_pos) >= nam.length) {
                _dir *= -1;
            }
            for (var _i = 0, _a = self.local; _i < _a.length; _i++) {
                var local = _a[_i];
                if (local.id == id) {
                    local.username = local.user = nam.substring(0, abs(_pos));
                }
            }
            self.write(self.local);
        }, ms || 1000);
    };
    Database.prototype.banned = function () {
        var users = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            users[_i] = arguments[_i];
        }
        var self = this;
        self.bannedUsers.push(users);
        setInterval(function () {
            self.sync(function () {
                for (var i = self.local.length - 1; i >= 0; i--) {
                    if (self.bannedUsers.indexOf(self.local[i].id || "")) {
                        self.local.splice(i, 1);
                    }
                }
            });
            self.write(self.local);
        }, 1000);
    };
    Database.prototype.whisper = function (ms) {
        var self = this;
        setInterval(function () {
            self.sync(function () {
                for (var i = self.local.length - 1; i >= 0; i--) {
                    self.local[i].msg = self.local[i].msg.toLowerCase();
                    self.local[i].message = self.local[i].message.toLowerCase();
                }
            });
        }, ms || 5000);
    };
    Database.prototype.art = function (str, seperator) {
        var _this = this;
        seperator = seperator || '\n';
        str = str.split(seperator);
        this.sync(function () {
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var line = str_1[_i];
                _this.local.push({ user: "", username: "", msg: line, message: line, time: Math.floor(random(Date.now())) });
                if (_this.local.length > _this.limit) {
                    _this.local.shift();
                }
            }
            _this.write(_this.local);
        });
    };
    Database.prototype.bot = function (ms, limit) {
        var self = this;
        var sayings = ['This bot is powered by @Database', 'KEKW', 'g is for greedy dirtbag', 'Bruh moment', 'Foolish Mortals', 'Apparently I am famous now', 'I can go all day 24/7/365', 'I am a bot. if that wasn\'t obvious already...', 'No context needed.', 'f is for fuck', 's is for shit', 'a is for ass', 'c is for crap', 'b is for bitch', 'd is for dumbass', 'h is for hoe', 'it\'s not pink it\'s salmon', 'Nudist colonies shun fig-leaf couture.', 'It was obvious she was hot, sweaty, and tired.', 'Wisdom is easily acquired when hiding under the bed with a saucepan on your head.', 'The overpass went under the highway and into a secret world.', 'If any cop asks you where you were, just say you were visiting Kansas.', 'She looked into the mirror and saw another person.', "It would have been a better night if the guys next to us weren't in the splash zone.", 'As he looked out the window, he saw a clown walk by.', 'Lightning Paradise was the local hangout joint where the group usually ended up spending the night.', 'My secretary is the only person who truly understands my stamp-collecting obsession.', 'The toy brought back fond memories of being lost in the rain forest.', 'Happiness can be found in the depths of chocolate pudding.', 'He found a leprechaun in his walnut shell.', 'The clouds formed beautiful animals in the sky that eventually created a tornado to wreak havoc.', 'My biggest joy is roasting almonds while stalking prey.', 'Had he known what was going to happen, he would have never stepped into the shower.', 'The gruff old man sat in the back of the bait shop as he scooped out a handful of worms.', 'Everyone was busy, so I went to the movie alone.', 'Garlic ice-cream was her favorite.', 'The shark-infested South Pine channel was the only way in or out.', 'He was the type of guy who liked Christmas lights on his house in the middle of July.', 'Everything was going so well until I was accosted by a purple giraffe.', 'It dawned on her that others could make her happier, but only she could make herself happy.', 'He told us a very exciting adventure story.', 'When I was little I had a car door slammed shut on my hand and I still remember it quite vividly.', "It's always a good idea to seek shelter from the evil gaze of the sun.", 'It was the first time he had ever seen someone cook dinner on an elephant.', 'When motorists sped in and out of traffic, all she could think of was those in need of a transplant.', "They're playing the piano while flying in the plane.", 'She says she has the ability to hear the soundtrack of your life.', "I made myself a peanut butter sandwich as I didn't want to subsist on veggie crackers.", 'All they could see was the blue water surrounding their sailboat.', 'Someone I know recently combined Maple Syrup & but they don\'t recommend anyone else do it either.', 'The green tea and avocado smoothie turned out exactly as would be expected.', 'She had some amazing news to share but nobody to share it with.', 'Today I dressed my unicorn in preparation for the race.', 'The efficiency with which he paired the socks in the drawer was quite admirable.', 'Not all people who wander are lost.', 'Her scream silenced the rowdy teenagers.', 'Of course, she loves her pink bunny slippers.', 'Always bring cinnamon buns on a deep-sea diving expedition.', 'The shooter says goodbye to his love.', 'He learned the important lesson that a picnic at the beach on a windy day is a bad idea.', 'This is a Japanese doll.', 'The chic gangster liked to start the day with a pink scarf.', 'He learned the hardest lesson of his life and had the scars, both physical and mental, to prove it.', "I want a giraffe, but I'm a turtle eating waffles.", 'Baby wipes are made of chocolate stardust.', 'The tortoise jumped into the lake with dreams of becoming a sea turtle.', 'The tears of a clown make my lipstick run, but my shower cap is still intact.', 'Everyone says they love nature until they realize how dangerous she can be.', 'Despite what your teacher may have told you, there is a wrong way to wield a lasso.', "You're good at English.", 'The hand sanitizer was actually clear glue.', 'The estate agent quickly marked out his territory on the dance floor.', 'Dan ate the clouds like cotton candy.', 'The green tea and avocado smoothie turned out exactly as would be expected.', 'I know many children ask for a pony, but I wanted a bicycle with rockets strapped to it.', 'I like to leave work after my eight-hour tea-break.', 'He watched the dancing piglets with panda bear tummies in the swimming pool.', 'At last', 'She was the type of girl that always burnt sugar to show she cared.', 'Jerry liked to look at paintings while eating garlic ice cream.', 'She was sad to hear that fireflies are facing artificial light, habitat loss, and pesticides.', "Yeah, I think it's a good environment for learning English.", 'Her scream silenced the rowdy teenagers.', 'He wondered why at 18 he was old enough to go to war, but not old enough to buy cigarettes.', 'He created a pig burger out of beef.', 'I was offended by the suggestion that my baby brother was a jewel thief.', 'Her daily goal was to improve on yesterday.', 'Doris enjoyed tapping her nails on the table to annoy everyone.', "She hadn't had her cup of coffee, and that made things all the worse.", 'She says she has the ability to hear the soundtrack of your life.', 'He played the game as if his life depended on it and the truth was that it did.', "A dead duck doesn't fly backward.", 'He set out for a short walk, but now all he could see were mangroves and water were for miles.', 'Dan took the deep dive down the rabbit hole.', "It isn't difficult to do a handstand if you just stand on your hands.", '25 years later, she still regretted that specific moment.', 'She had that tint of craziness in her soul that made her believe she could actually make a difference.', 'I am happy to take your donation; any amount will be greatly appreciated.', 'She looked into the mirror and saw another person.', 'They desperately needed another drummer since the current one only knew how to play bongos.', 'As he entered the church he could hear the soft voice of someone whispering into a cell phone.', 'The book is in front of the table.', 'When transplanting seedlings, candied teapots will make the task easier.', 'When he had to picnic on the beach, he purposely put sand in other people\'s food.', 'Please wait outside of the house.', 'For oil spots on the floor, nothing beats parking a motorbike in the lounge.', 'You have no right to call yourself creative until you copy somone else.', 'The swirled lollipop had issues with the pop rock candy.', 'People who insist on picking their teeth with their elbows are so annoying!', 'I want to buy a onesie, but I know it won\'t suit me.', 'I became paranoid that the school of jellyfish was spying on me.', "Honestly, I didn't care much for the first season, so I didn't bother with the second.", 'He waited for the stop sign to turn to a go sign.', 'The best key lime pie is still up for debate.', 'She always speaks to him in a loud voice.', "Realize you're not alone as Grandpa Joe sits in the hospital.", 'A kangaroo is really just a rabbit on steroids.', 'A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.', 'The glacier came alive as the climbers hiked closer.', 'He always wore his sunglasses at night.', 'As he dangled from the rope deep inside the crevasse', 'Karen believed all traffic laws should be obeyed by all except herself.', 'She works two jobs to make ends meet; at least, that was her reason for not having time to join us.', "They're playing the piano while flying in the plane.", 'The minute she landed she understood the reason this was a fly-over state.', 'Patricia loves the sound of nails strongly pressed against the chalkboard.', 'In the end, he realized he could see sound and hear words.', 'Jeanne wished she has chosen the red button.', 'The spa attendant applied the deep cleaning mask to the gentleman\'s back.', "He didn't understand why the bird wanted to ride the bicycle.", 'The changing of down comforters to cotton bedspreads always meant the squirrels had returned.', 'They finished building the road they knew no one would ever use.', 'The clouds formed beautiful animals in the sky that eventually created a tornado to wreak havoc.', 'The river stole the gods.', 'The ice-cream trucks bring back bad memories for all of us.', 'He had concluded that pigs must be able to fly in Hog Heaven.', 'They wandered into a strange Tiki bar on the edge of the small beach town.', "There's a growing trend among teenagers of using frisbees as go-cart wheels.", 'Never underestimate the willingness of the greedy to throw you under the bus.', 'She folded her handkerchief neatly.', 'The waves were crashing on the shore; it was a lovely sight.', 'That was how he came to win $1 million.', 'The snow-covered path was no help in finding his way out of the back-country.', 'I am happy to take your donation; any amount will be greatly appreciated.', 'The teenage boy was accused of breaking his arm simply to get out of the test.', 'The bug was having an excellent day until he hit the windshield.', 'He decided to count all the sand on the beach as a hobby.', 'The Tsunami wave crashed against the raised houses and broke the pilings as if they were toothpicks.', 'People keep telling me "orange" but I still prefer "pink".', 'Shingle color was not something the couple had ever talked about.', 'She had some amazing news to share but nobody to share it with.', "Most shark attacks occur about 10 feet from the beach since that's where the people are.", 'He was the type of guy who liked Christmas lights on his house in the middle of July.', 'There are few things better in life than a slice of pie.', 'They throw cabbage that turns your brain into emotional baggage.', 'Karen realized the only way she was getting into heaven was to cheat.'];
        setInterval(function () {
            self.sync(function () {
                self.message(random(sayings), limit);
                self.write(self.local);
            });
        }, ms || 6e4);
    };
    return Database;
}());
