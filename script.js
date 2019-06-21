// Ch.2 lightning Exercises

    // Lightning Ex.1

const car = {
    carMaker: "Ford",
    carType: "Mustang",
    carColor: "Red",
    carYear: "2015",
}

    // Lightnin Ex.2

const animalNames = ["kippers", "Jack", "Gypsy", "Angus"]

        // Lightning Ex.3

const dad = {
    name: "John Smith",
    age: 55
}

const mom = {
    name: "Mary Smith",
    age: 50
}

const sister = {
    name: "Julie Smith",
    age: 25
}

const brother = {
    name: "John Smith",
    age: 20
}

const smithFamily = [dad, mom, sister, brother]

            // Lightning Exercise (second part)


            const wardrobe = {
                height: 80,
                manufacturer: "Killibrew & Sons",
                contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
                depth: 38,
                width: 50
            }
            


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

let empireAddress = empireStateBuilding["address"];



            // Lightning Exercise (third part)

            const nashvilleSoftwareSchool = {
                founded: 2012,
                director: "John Wark",
                instructors: {
                    fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
                    partTime: ["Zoe", "Nathan"]
                },
                address: "500 Interstate Blvd. S"
            }


            // console.log(nashvilleSoftwareSchool.instructors.fullTime)
            // console.log(nashvilleSoftwareSchool.instructors.partTime)

            // console.log(nashvilleSoftwareSchool.instructors.fullTime[4])
            // console.log(nashvilleSoftwareSchool.instructors.partTime[0])


            // Practice: Accessing Property Values

            const beatles = {
                albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
                history: {
                    formed: 1960,
                    disbanded: 1970
                },
                members: [
                    {
                        name: "George Harrison",
                        birth: 1943,
                        death: 2001
                    },
                    {
                        name: "Paul McCartney",
                        birth: 1942,
                        death: null
                    },
                    {
                        name: "John Lennon",
                        birth: 1940,
                        death: 1980
                    },
                    {
                        name: "Ringo Starr",
                        birth: 1940,
                        death: null
                    }
                ]
            }

// console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album. `);

