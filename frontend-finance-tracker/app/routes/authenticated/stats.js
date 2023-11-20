import Route from '@ember/routing/route';

export default class AuthenticatedStatsRoute extends Route {

    async model() {
        const res = await fetch('/stats/overview');
        // console.log(res);

        const parsed = await res.json();
        // console.log(parsed);
        return parsed;
    }
}
