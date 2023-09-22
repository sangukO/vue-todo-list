export default [
    {
        baseURL: "/todos",
        headers: {
            "Content-type": "application/json",
        },
    },
    {
        request: {
            success(config) {
                switch (config.method) {
                    case "get":
                        break;
                    case "post":
                        break;
                    case "put":
                        break;
                    case "patch":
                        break;
                }
                return config;
            },
        },
        response: {
            success(axiosResponse) {
                return axiosResponse;
            },
            fail(response) {
                return response;
            },
        },
    },
];
