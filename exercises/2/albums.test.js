const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("albums", () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [
                {
                    name: "californication"
                },
                {
                    name: "americana"
                },
                {
                    name: "evolve"
                }
            ]
        }
    });
    return getAlbumNames("meat loaf").then(albumNames => {
        expect(albumNames).toEqual(albumNames.sort());
    });
});
///mock an object like the one we get from spotify, similar to headlines
// albums, item, objects with name etc etc
