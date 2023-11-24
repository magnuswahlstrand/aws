import {SSTConfig} from "sst";
import {Api, StaticSite, Table} from "sst/constructs";

export default {
    config(_input) {
        return {
            name: "magnus-htmx",
            region: "eu-north-1",
        };
    },
    stacks(app) {
        app.setDefaultFunctionProps({
            runtime: "go",
        });

        app.stack(function Stack({stack}) {
            const domain = app.stage === "prod" ? "htmx.link" : `${app.stage}.htmx.link`
            const apiDomain = app.stage === "prod" ? "api.htmx.link" : `api-${app.stage}.htmx.link`
            const table = new Table(stack, "Users2", {
                fields: {
                    UserID: "string",
                    FirstName: "string",
                    LastName: "string",
                },
                primaryIndex: {partitionKey: "UserID"},
            });

            const exerciseLogTable = new Table(stack, "ExerciseTable2", {
                fields: {
                    UserID: "string",
                    ExerciseDate: "string",
                    ExerciseName: "string",
                    Weight: "number",
                },
                primaryIndex: {partitionKey: "UserID", sortKey: "ExerciseDate"},
            });

            const site = new StaticSite(stack, "Site", {
                path: "web",
                customDomain: {
                    domainName: domain,
                    domainAlias: `www.${domain}`,
                },
                indexPage: "index.html",
                replaceValues: [
                    {
                        files: "*.html",
                        search: "api-magnus.htmx.link",
                        replace: apiDomain
                    },
                ],
            });


            const api = new Api(stack, "api", {
                defaults: {
                    function: {
                        bind: [table],
                        environment: {
                            TABLE_NAME: table.tableName,
                        }
                    }
                },
                customDomain: apiDomain,
                cors: {
                    allowMethods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
                    allowOrigins: ["*"],
                    allowHeaders: ["*"],
                },
                routes: {
                    "ANY /{proxy+}": "functions/lambda/main.go",
                },
            });
            stack.addOutputs({
                ApiEndpoint: api.customDomainUrl || api.url,
                SiteUrl: site.customDomainUrl || site.url,
                ExerciseTable: exerciseLogTable.tableName,
            });
        });
    },
} satisfies SSTConfig;

