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
                }
                console.log(config);
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
