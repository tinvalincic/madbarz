export function changeSite(site, parameters) {
    return {
        type: "CHANGE_SITE",
        payload: {
            site: site,
            payload: {...parameters}
        }
    };
}