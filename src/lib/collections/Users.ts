import type { CollectionConfig } from "../../seams/config/types";

const Users: CollectionConfig = {
    slug: "users",
    labels: {
        singular: "User",
        plural: "Users",
    },
    fields: [
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
        },
        {
            name: "email",
            label: "Email",
            type: "text",
            required: true,
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            required: true,
        },
        {
            name: "roles",
            label: "Roles",
            type: "tags",
            required: true,
            defaultValue: ["user"],
        },
    ],
};

export default Users;