
export type TextField = {
    name: string;
    label?: string;
    type: 'text';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
    placeholder?: string;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    validate?: (value: string) => string | undefined;
};

export type TextAreaField = {
    name: string;
    label?: string;
    type: 'textarea';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
    placeholder?: string;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    validate?: (value: string) => string | undefined;
};

export type PasswordField = {
    name: string;
    label?: string;
    type: 'password';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
    placeholder?: string;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    validate?: (value: string) => string | undefined;
};

export type SelectField = {
    name: string;
    label?: string;
    type: 'select';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
    options: {
        label: string;
        value: string;
    }[];
};

export type CheckboxField = {
    name: string;
    label?: string;
    type: 'checkbox';
    required?: boolean;
    hint?: string;
    defaultValue?: boolean;
};

export type RadioField = {
    name: string;
    label?: string;
    type: 'radio';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
    options: {
        label: string;
        value: string;
    }[];
};

export type FileField = {
    name: string;
    label?: string;
    type: 'file';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
    accept?: string;
};

export type ImageField = {
    name: string;
    label?: string;
    type: 'image';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
    accept?: string;
};

export type DateField = {
    name: string;
    label?: string;
    type: 'date';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
    min?: string;
    max?: string;
};

export type DateTimeField = {
    name: string;
    label?: string;
    type: 'datetime';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
    min?: string;
    max?: string;
};

export type TimeField = {
    name: string;
    label?: string;
    type: 'time';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
    min?: string;
    max?: string;
};

export type NumberField = {
    name: string;
    label?: string;
    type: 'number';
    required?: boolean;
    hint?: string;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
};

export type ColorField = {
    name: string;
    label?: string;
    type: 'color';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
};

export type RichTextField = {
    name: string;
    label?: string;
    type: 'richtext';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
};

export type MarkdownField = {
    name: string;
    label?: string;
    type: 'markdown';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
};

export type TagsField = {
    name: string;
    label?: string;
    type: 'tags';
    required?: boolean;
    hint?: string;
    defaultValue?: string[];
};

export type ListField = {
    name: string;
    label?: string;
    type: 'list';
    required?: boolean;
    hint?: string;
    defaultValue?: string[];
    field: Field;
};

export type GroupField = {
    name: string;
    label?: string;
    type: 'group';
    required?: boolean;
    hint?: string;
    defaultValue?: Record<string, any>;
    fields: Field[];
};

export type RepeaterField = {
    name: string;
    label?: string;
    type: 'repeater';
    required?: boolean;
    hint?: string;
    defaultValue?: Record<string, any>[];
    fields: Field[];
};

export type BlocksField = {
    name: string;
    label?: string;
    type: 'blocks';
    required?: boolean;
    hint?: string;
    defaultValue?: Record<string, any>[];
    blocks: {
        slug: string;
        labels?: {
            singular?: Record<string, string> | string;
            plural?: Record<string, string> | string;
        };
        fields: Field[];
    }[];
};

export type LinkField = {
    name: string;
    label?: string;
    type: 'link';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
    collections: string[];
};

export type OEmbedField = {
    name: string;
    label?: string;
    type: 'oembed';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
};

export type GeopointField = {
    name: string;
    label?: string;
    type: 'geopoint';
    required?: boolean;
    hint?: string;
    defaultValue?: {
        lat: number;
        lng: number;
    };
};

export type RelationshipField = {
    name: string;
    label?: string;
    type: 'relationship';
    required?: boolean;
    hint?: string;
    defaultValue?: string[];
    collections: string[];
    display: {
        value: string;
        hint?: string;
    };
    filters?: {
        field: string;
        value: string;
    }[];
};

export type NetlifyField = {
    name: string;
    label?: string;
    type: 'netlify';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
};

export type HiddenField = {
    name: string;
    label?: string;
    type: 'hidden';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
};

export type CustomField = {
    name: string;
    label?: string;
    type: 'custom';
    required?: boolean;
    hint?: string;
    defaultValue?: string;
    component: string;
    props?: Record<string, any>;
};



export type Field = TextField | TextAreaField | PasswordField | SelectField | CheckboxField | RadioField | FileField | ImageField | DateField | DateTimeField | TimeField | NumberField | ColorField | RichTextField | MarkdownField | TagsField | ListField | GroupField | RepeaterField | BlocksField | LinkField | OEmbedField | GeopointField | RelationshipField | NetlifyField | HiddenField | CustomField;
export type CollectionConfig = {
    labels?: {
        singular?: Record<string, string> | string;
        plural?: Record<string, string> | string;
    };
    slug: string;
    fields: Field[];
};

export type Config = {
    collections: CollectionConfig[];
};