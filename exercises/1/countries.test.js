const countries = require("./countries");

test("not a country in the array returns empty array", () => {
    expect(countries.find("noCountry")).toEqual([]);
});

test("empty string returns empty array", () => {
    expect(countries.find("")).toEqual([]);
});

test("we write a letter an returns 4 contries starting with that letter", () => {
    expect(countries.find("T")).toEqual([
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand"
    ]);
});

test("no matter CAPS returns a country with capital first letter and rest small", () => {
    expect(countries.find("AFGHANISTAN")).toEqual(["Afghanistan"]);
});
