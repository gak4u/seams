
import type { PageServerLoad } from './$types';
import { collections } from '../../../seams/db';
import seamsConfig from '../../../seams.config';

export const load: PageServerLoad = async ({ params }: { params: Record<string, string> }) => {
    let records = await collections[params.slug].find();
    return {
        status: 200,
        body: {
            config: seamsConfig.collections.find((collection) => collection.slug === params.slug),
            records: JSON.parse(JSON.stringify(records)),
        },
    };
};