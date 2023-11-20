import Route from '@ember/routing/route';

export default class AuthenticatedStatsRoute extends Route {

    async model() {
        const res = await fetch('/stats/overview');
        const parsed = await res.json();
        return parsed;
    }
}
