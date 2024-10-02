/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_CNB_RATES_SERVER: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
