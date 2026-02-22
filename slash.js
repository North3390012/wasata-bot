module.exports = async (client) => {
    const commands = [
        {
            name: "add-user",
            description: "Add user to ticket channel",
            options: [
                {
                    name: "user",
                    description: "Choose a user",
                    type: "USER",
                    required: true
                }
            ]
        },
        {
            name: "end",
            description: "End mediation and close the ticket channel"
        }
    ];

    await client.application.commands.set(commands);
};
