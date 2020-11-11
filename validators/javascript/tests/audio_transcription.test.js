const test = require("ava");
const v = require("../");

test("audio transcription should validate", (t) => {
  t.throws(() => {
    v.Sample({ audioUrl: "asd" });
  });
});
