const teamData = {

    teamName: 'Team Malone',
    percent: 25,
    goal: '$5,000',
    raised: '$1,250',
    data: [
        {
            name: 'Bob',
            contri: '$1250'

        },
        {
            name: 'Alex',
            contri: '$430'

        },
        {
            name: 'Tom Hanks',
            contri: '$1550'

        },
        {
            name: 'Matt Smith',
            contri: '$340'

        },
        {
            name: 'Matt Smith',
            contri: '$1240'

        },
        {
            name: 'Bob',
            contri: '$1250'

        },
        {
            name: 'Tom Hanks',
            contri: '$550'

        }, {
            name: 'Matt Smith',
            contri: '$250'

        }, {
            name: 'Alex',
            contri: '$1250'

        }, {
            name: 'Tom Hanks',
            contri: '$1250'

        },
    ],
    teamNameNext: 'Team Alex',
    percentNext: 30,
    goalNext: '$5,000',
    raisedNext: '$2,300',
    dataNext: [
        {
            name: 'Alex',
            contri: '$1250'

        },
        {
            name: 'Martin',
            contri: '$430'

        },
        {
            name: 'Rob',
            contri: '$1550'

        },
        {
            name: 'Freya',
            contri: '$340'

        },
        {
            name: 'Matt Smith',
            contri: '$1240'

        },
        {
            name: 'Bob',
            contri: '$1250'

        },
        {
            name: 'Justin',
            contri: '$550'

        }, {
            name: 'Matt Smith',
            contri: '$250'

        }, {
            name: 'Alex',
            contri: '$1250'

        }, {
            name: 'Bob',
            contri: '$1250'

        },
    ]

}

getTeamData = () => {
    return new Promise((resolve, reject) => {
        if (teamData) {
            resolve(teamData);
        }
        else {
            reject(error);
        }
    })
}

export default getTeamData;

