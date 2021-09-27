import { Accessor, createEffect, createSignal, Setter } from "solid-js";

import type {
  AnyStorageProps,
  AsyncStorage,
<<<<<<< HEAD
  AsyncStorageObject,
  AsyncStorageSetter,
  AsyncStorageWithOptions,
=======
  AsyncStorageActions,
  AsyncStorageObject,
  AsyncStorageSetter,
  AsyncStorageWithOptions,
  StorageActions,
>>>>>>> 34e82ae1598a3f44a03939374c1417955c02ce82
  StorageObject,
  StorageProps,
  StorageSetter,
  StorageSignalProps,
  StorageWithOptions,
  StringStorageProps
} from "./types";

<<<<<<< HEAD
export function createStorage<O>(props?: StringStorageProps<Storage | StorageWithOptions<O>, O>): [
  store: StorageObject<string>,
  setter: StorageSetter<string, O>,
  controls: {
    remove: (key: string) => void;
    clear: () => void;
    toJSON: () => { [key: string]: string };
  }
=======
/**
 * like createStore, but bound to a localStorage-like API
 * ```typescript
 * type StorageWithOptions<O> = Storage; // but with options added to setItem
 * type StorageProps<T extends string, O> = {
 *   api?: Storage | StorageWithOptions;
 *   // or an array thereof, default will be localStorage
 *   deserializer?: (value: string, key: string, options?: O) => T;
 *   serializer?: (value: T, key: string, options?: O) => string;
 *   options?: O; // options
 *   prefix?: string // will be prefixed to the key
 * };
 * createStorage(props?: StorageProps) => [
 *   store: StorageObject<T>, // basically like `Store<T>`
 *   setter: StorageSetter<T>, // like `setStoreFunction<T>`
 *   actions: {
 *     remove: (key: string) => void;
 *     clear: () => void;
 *     toJSON: () => { [key: string]: T };
 *   }
 * ]
 * ```
 */
export function createStorage<O>(props?: StringStorageProps<Storage | StorageWithOptions<O>, O>): [
  store: StorageObject<string>,
  setter: StorageSetter<string, O>,
  actions: StorageActions<string>
>>>>>>> 34e82ae1598a3f44a03939374c1417955c02ce82
];
export function createStorage<O, T>(
  props?: AnyStorageProps<Storage | StorageWithOptions<O>, O, T>
): [
  store: StorageObject<T>,
  setter: StorageSetter<T, O>,
<<<<<<< HEAD
  controls: {
    remove: (key: string) => void;
    clear: () => void;
    toJSON: () => { [key: string]: T };
  }
=======
  actions: StorageActions<T>
>>>>>>> 34e82ae1598a3f44a03939374c1417955c02ce82
];
export function createStorage<O, T>(
  props?: StorageProps<T, Storage | StorageWithOptions<O>, O>
): [
  store: StorageObject<T>,
  setter: StorageSetter<T, O>,
<<<<<<< HEAD
  controls: {
    remove: (key: string) => void;
    clear: () => void;
    toJSON: () => { [key: string]: T };
  }
=======
  actions: StorageActions<T>
>>>>>>> 34e82ae1598a3f44a03939374c1417955c02ce82
] {
  const apis = props?.api ? (Array.isArray(props.api) ? props.api : [props.api]) : [localStorage];
  const prefix = props?.prefix ? `${props.prefix}.` : "";
  const signals = new Map<string, ReturnType<typeof createSignal>>();
  const store = new Proxy(
    {},
    {
      get(_, key: string) {
        let node = signals.get(key);
        if (!node) {
          node = createSignal(undefined, { equals: false });
          signals.set(key, node);
        }
        node[0]();
        const value = apis.reduce<string | null>(
          (result: string | null, api: Storage | StorageWithOptions<O> | undefined) => {
            if (result !== null || !api) {
              return result;
            }
            return api.getItem(`${prefix}${key}`) as string | null;
          },
          null
        );
        if (value !== null && props?.deserializer) {
          return props.deserializer(value as string, key, props?.options as O) as T;
        }
        return value as T | null;
      }
    }
  );
  const setter: StorageSetter<T, O> = (key, value: T, options?: O) => {
    const filteredValue = props?.serializer
      ? (props.serializer(
          value as any,
          key,
          options ?? (props?.options as O | undefined)
        ) as string)
      : (value as unknown as string);
    apis.forEach(api => api.setItem(`${prefix}${key}`, filteredValue));
    const node = signals.get(key);
    node && node[1]();
  };
  const remove = (key: string) => apis.forEach(api => api.removeItem(key));
  const clear = () => apis.forEach(api => api?.clear?.());
  const toJSON = (): StorageObject<T> => {
    const result: StorageObject<T> = {};
    apis.forEach(api => {
      let index = 0,
        key: string | null;
      while ((key = api.key(index++))) {
        if (!result.hasOwnProperty(key)) {
          const value = api.getItem(key);
          const filteredValue: T | null =
            value && props?.deserializer
              ? (props.deserializer(value, key, props?.options) as T)
              : (value as T | null);
          if (filteredValue) {
            result[key] = filteredValue;
          }
        }
      }
    });
    return result;
  };
  return [
    store,
    setter,
    {
      clear,
      remove,
      toJSON
    }
  ];
}

<<<<<<< HEAD
=======
/**
 * like createStore, but bound to an asynchronous localStorage-like API
 * ```typescript
 * type AsyncStorage = Storage // but returns everything wrapped in Promises
 * type AsyncStorageWithOptions<O> = Storage; // but with options added to setItem
 * type AsyncStorageProps<T extends string, O> = {
 *   api?: AsyncStorage | AsyncStorageWithOptions;
 *   // or an array thereof, default will be localStorage
 *   deserializer?: (value: string, key: string, options?: O) => T;
 *   serializer?: (value: T, key: string, options?: O) => string;
 *   options?: O; // options
 *   prefix?: string // will be prefixed to the key
 * };
 * createStorage(props?: AsyncStorageProps) => [
 *   store: AsyncStorageObject<T>, // basically like `Store<T>`
 *   setter: AsyncStorageSetter<T>, // like `setStoreFunction<T>`
 *   actions: {
 *     remove: (key: string) => Promise<void>;
 *     clear: () => Promise<void>;
 *     toJSON: () => Promise<{ [key: string]: T }>;
 *   }
 * ]
 * ```
 */
>>>>>>> 34e82ae1598a3f44a03939374c1417955c02ce82
export function createAsyncStorage<O>(
  props?: StringStorageProps<AsyncStorage | AsyncStorageWithOptions<O>, O>
): [
  store: AsyncStorageObject<string>,
  setter: AsyncStorageSetter<string, O>,
<<<<<<< HEAD
  controls: {
    remove: (key: string) => Promise<void> | void;
    clear: () => Promise<void> | void;
    toJSON: () => Promise<{ [key: string]: string }> | { [key: string]: string };
  }
=======
  actions: AsyncStorageActions<string>
>>>>>>> 34e82ae1598a3f44a03939374c1417955c02ce82
];
export function createAsyncStorage<O, T>(
  props?: AnyStorageProps<T, AsyncStorage | AsyncStorageWithOptions<O>, O>
): [
  store: AsyncStorageObject<T>,
  setter: AsyncStorageSetter<T, O>,
<<<<<<< HEAD
  controls: {
    remove: (key: string) => void;
    clear: () => void;
    toJSON: () => Promise<{ [key: string]: T }> | { [key: string]: T };
  }
=======
  actions: AsyncStorageActions<T>
>>>>>>> 34e82ae1598a3f44a03939374c1417955c02ce82
];
export function createAsyncStorage<O, T>(
  props?: StorageProps<T, AsyncStorage | AsyncStorageWithOptions<O>, O>
): [
  store: AsyncStorageObject<T>,
  setter: AsyncStorageSetter<T, O>,
<<<<<<< HEAD
  controls: {
    remove: (key: string) => void;
    clear: () => void;
    toJSON: () => Promise<{ [key: string]: T }> | { [key: string]: T };
  }
=======
  actions: AsyncStorageActions<T>
>>>>>>> 34e82ae1598a3f44a03939374c1417955c02ce82
] {
  const apis = props?.api ? (Array.isArray(props.api) ? props.api : [props.api]) : [localStorage];
  const prefix = props?.prefix ? `${props.prefix}.` : "";
  const signals = new Map<string, ReturnType<typeof createSignal>>();
  const store: AsyncStorageObject<T> = new Proxy({} as AsyncStorageObject<T>, {
    get(_, key: string) {
      let node = signals.get(key);
      if (!node) {
        node = createSignal(undefined, { equals: false });
        signals.set(key, node);
      }
      node[0]();
      return apis.reduce((result: T | null, api: AsyncStorage | undefined): T | null => {
        if (result !== null || !api) {
          return result;
        }
        const value = api.getItem(`${prefix}${key}`);
        if (value instanceof Promise) {
          return value.then((value: string | null) =>
            value && props?.deserializer ? props.deserializer(value, key, props?.options) : value
          ) as any;
        }
        return value !== null && props?.deserializer
          ? Promise.resolve(props.deserializer(value as string, key, props?.options as O) as T)
          : (Promise.resolve(value as T | null) as any);
      }, null);
    }
  });
  const setter = (key: string, value: T, options?: O) => {
    const filteredValue = props?.serializer
      ? props.serializer(value as any, key, options ?? props?.options)
      : (value as unknown as string);
    return Promise.all(
      apis.map(api =>
        api.setItem(`${prefix}${key}`, filteredValue, options ?? (props?.options as O | undefined))
      )
    ).then(() => {
      const node = signals.get(key);
      node && node[1]();
    });
  };
  const remove = (key: string) =>
    Promise.all(apis.map(api => api.removeItem(`${prefix}${key}`))).then(() => {
      const node = signals.get(key);
      node && node[1]();
    });
  const clear = () =>
    Promise.all(
      apis.map(async api => {
        let index = 0,
          key;
        while ((key = await api.key(index++))) {
          await api.removeItem(key);
        }
      })
    ).then(() => {
      return;
    });
  const toJSON = async () => {
    const result: StorageObject<T> = {};
    await Promise.all(
      apis.map(async api => {
        let index = 0,
          key: string | null;
        while ((key = await api.key(index++))) {
          if (!result.hasOwnProperty(key)) {
            const value = await api.getItem(key);
            const filteredValue: T | null =
              value && props?.deserializer
                ? (props.deserializer(value, key, props?.options) as T)
                : (value as T | null);
            if (filteredValue) {
              result[key] = filteredValue;
            }
          }
        }
      })
    );
    return result;
  };
  return [
    store,
    setter,
    {
      remove,
      clear,
      toJSON
    }
  ];
}

<<<<<<< HEAD
=======
/**
 * like createSignal, but bound to a localStorage-like API
 * ```typescript
 * type StorageWithOptions<O> = Storage; // but with options added to setItem
 * type StorageProps<T extends string, O> = {
 *   api?: Storage | StorageWithOptions;
 *   // or an array thereof, default will be localStorage
 *   deserializer?: (value: string, key: string, options?: O) => T;
 *   serializer?: (value: T, key: string, options?: O) => string;
 *   options?: O; // options
 *   prefix?: string // will be prefixed to the key
 * };
 * createStorage<T extends string>(key: string, props?: StorageProps<T>) => [
 *   accessor: Accessor<T>, // basically like `value()`
 *   setter: Setter<T>, // like `setValue()`
 *   refetch: () => void // reloads from storage
 * ]
 * ```
 */
>>>>>>> 34e82ae1598a3f44a03939374c1417955c02ce82
export function createStorageSignal<T extends any, O extends any>(
  key: string,
  initialValue?: T,
  props?: StorageSignalProps<T, Storage | StorageWithOptions<O>, O>
<<<<<<< HEAD
): [Accessor<T>, Setter<T>] {
=======
): [accessor: Accessor<T | null>, setter: Setter<T | null>, refetch: () => void] {
>>>>>>> 34e82ae1598a3f44a03939374c1417955c02ce82
  const apis = props?.api ? (Array.isArray(props.api) ? props.api : [props.api]) : [localStorage];
  const prefix = props?.prefix ? `${props.prefix}.` : "";
  const read = () =>
    apis.reduce<T | null>((result: T | null, api: StorageWithOptions<O> | Storage | undefined) => {
      if (result !== null || !api) {
        return result;
      }
      const value = api.getItem(`${prefix}${key}`) as T | null;
      if (value !== null && props?.deserializer) {
        return props.deserializer(value as string, key, props?.options as O) as T;
      }
      return value;
    }, null);
<<<<<<< HEAD
  const signal = createSignal<T>(initialValue as T);
  createEffect(() => {
    const value = signal[0]();
    const filteredValue = props?.serializer
      ? props.serializer(value as string & T, key, props?.options)
      : (value as string);
    apis.forEach(api => api.setItem(`${prefix}${key}`, filteredValue, props?.options));
  });
  return signal;
=======
  const [accessor, setter] = createSignal<T | null>(read() ?? initialValue as T);
  createEffect(() => {
    const value = accessor();
    const filteredValue = props?.serializer
      ? props.serializer(value as string & T, key, props?.options)
      : (value as string);
    if (value === null) {
      apis.forEach(api => api.removeItem(`${prefix}${key}`));
    } else {
      apis.forEach(api => api.setItem(`${prefix}${key}`, filteredValue, props?.options));
    }
  });
  return [
    accessor,
    setter,
    () => {
      const value = read();
      setter(value as any);
    }
  ];
>>>>>>> 34e82ae1598a3f44a03939374c1417955c02ce82
}

export const createLocalStorage = createStorage;

export const createSessionStorage = <T, O>(props: StorageProps<T, Storage, O>) =>
  createStorage({ ...props, api: sessionStorage } as any);