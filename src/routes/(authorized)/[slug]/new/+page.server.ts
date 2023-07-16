
import type { PageServerLoad } from './$types';
import { collections } from '../../../../seams/db';
import { seamsConfig } from '../../../../seams';

export const load: PageServerLoad = async ({ params }: { params: Record<string, string> }) => {
    let records = await collections[params.slug].find();
    return {
        status: 200,
        body: {
            config: seamsConfig.collections.find((collection) => collection.slug === params.slug)
        },
    };
};


export const actions = {
    default: async ({ params, cookies, request }: { params: Record<string, string>, cookies: Record<string, string>, request: Request }) => {
        const data = await request.formData();
        let doc = new collections[params.slug](Object.fromEntries(data));
        let res = await doc.save();
        return {
            status: 200,
            body: {
                message: "Record created"
            }
        }
    }   
};

