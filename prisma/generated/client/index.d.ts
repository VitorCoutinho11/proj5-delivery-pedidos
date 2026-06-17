
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model pedido
 * 
 */
export type pedido = $Result.DefaultSelection<Prisma.$pedidoPayload>
/**
 * Model item_pedido
 * 
 */
export type item_pedido = $Result.DefaultSelection<Prisma.$item_pedidoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pedidos
 * const pedidos = await prisma.pedido.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pedidos
   * const pedidos = await prisma.pedido.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pedido`: Exposes CRUD operations for the **pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item_pedido`: Exposes CRUD operations for the **item_pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Item_pedidos
    * const item_pedidos = await prisma.item_pedido.findMany()
    * ```
    */
  get item_pedido(): Prisma.item_pedidoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    pedido: 'pedido',
    item_pedido: 'item_pedido'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pedido" | "item_pedido"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      pedido: {
        payload: Prisma.$pedidoPayload<ExtArgs>
        fields: Prisma.pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findFirst: {
            args: Prisma.pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findMany: {
            args: Prisma.pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          create: {
            args: Prisma.pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          createMany: {
            args: Prisma.pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          update: {
            args: Prisma.pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          deleteMany: {
            args: Prisma.pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      item_pedido: {
        payload: Prisma.$item_pedidoPayload<ExtArgs>
        fields: Prisma.item_pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.item_pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.item_pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>
          }
          findFirst: {
            args: Prisma.item_pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.item_pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>
          }
          findMany: {
            args: Prisma.item_pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>[]
          }
          create: {
            args: Prisma.item_pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>
          }
          createMany: {
            args: Prisma.item_pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.item_pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>
          }
          update: {
            args: Prisma.item_pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>
          }
          deleteMany: {
            args: Prisma.item_pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.item_pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.item_pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$item_pedidoPayload>
          }
          aggregate: {
            args: Prisma.Item_pedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem_pedido>
          }
          groupBy: {
            args: Prisma.item_pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Item_pedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.item_pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<Item_pedidoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pedido?: pedidoOmit
    item_pedido?: item_pedidoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    itens: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | PedidoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_pedidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    pedido_id: number | null
    usuario_id: number | null
    restaurante_id: number | null
    pedido_status: number | null
    pedido_valor_total: number | null
  }

  export type PedidoSumAggregateOutputType = {
    pedido_id: number | null
    usuario_id: number | null
    restaurante_id: number | null
    pedido_status: number | null
    pedido_valor_total: number | null
  }

  export type PedidoMinAggregateOutputType = {
    pedido_id: number | null
    usuario_id: number | null
    restaurante_id: number | null
    pedido_status: number | null
    pedido_valor_total: number | null
    pedido_criacao_pedido: Date | null
  }

  export type PedidoMaxAggregateOutputType = {
    pedido_id: number | null
    usuario_id: number | null
    restaurante_id: number | null
    pedido_status: number | null
    pedido_valor_total: number | null
    pedido_criacao_pedido: Date | null
  }

  export type PedidoCountAggregateOutputType = {
    pedido_id: number
    usuario_id: number
    restaurante_id: number
    pedido_status: number
    pedido_valor_total: number
    pedido_criacao_pedido: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    pedido_id?: true
    usuario_id?: true
    restaurante_id?: true
    pedido_status?: true
    pedido_valor_total?: true
  }

  export type PedidoSumAggregateInputType = {
    pedido_id?: true
    usuario_id?: true
    restaurante_id?: true
    pedido_status?: true
    pedido_valor_total?: true
  }

  export type PedidoMinAggregateInputType = {
    pedido_id?: true
    usuario_id?: true
    restaurante_id?: true
    pedido_status?: true
    pedido_valor_total?: true
    pedido_criacao_pedido?: true
  }

  export type PedidoMaxAggregateInputType = {
    pedido_id?: true
    usuario_id?: true
    restaurante_id?: true
    pedido_status?: true
    pedido_valor_total?: true
    pedido_criacao_pedido?: true
  }

  export type PedidoCountAggregateInputType = {
    pedido_id?: true
    usuario_id?: true
    restaurante_id?: true
    pedido_status?: true
    pedido_valor_total?: true
    pedido_criacao_pedido?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithAggregationInput | pedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    pedido_id: number
    usuario_id: number
    restaurante_id: number
    pedido_status: number
    pedido_valor_total: number
    pedido_criacao_pedido: Date
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    usuario_id?: boolean
    restaurante_id?: boolean
    pedido_status?: boolean
    pedido_valor_total?: boolean
    pedido_criacao_pedido?: boolean
    itens?: boolean | pedido$itensArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type pedidoSelectScalar = {
    pedido_id?: boolean
    usuario_id?: boolean
    restaurante_id?: boolean
    pedido_status?: boolean
    pedido_valor_total?: boolean
    pedido_criacao_pedido?: boolean
  }

  export type pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pedido_id" | "usuario_id" | "restaurante_id" | "pedido_status" | "pedido_valor_total" | "pedido_criacao_pedido", ExtArgs["result"]["pedido"]>
  export type pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | pedido$itensArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido"
    objects: {
      itens: Prisma.$item_pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pedido_id: number
      usuario_id: number
      restaurante_id: number
      pedido_status: number
      pedido_valor_total: number
      pedido_criacao_pedido: Date
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = $Result.GetResult<Prisma.$pedidoPayload, S>

  type pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido'], meta: { name: 'pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `pedido_id`
     * const pedidoWithPedido_idOnly = await prisma.pedido.findMany({ select: { pedido_id: true } })
     * 
     */
    findMany<T extends pedidoFindManyArgs>(args?: SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends pedidoCreateArgs>(args: SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidoCreateManyArgs>(args?: SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends pedidoDeleteArgs>(args: SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidoUpdateArgs>(args: SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(
      args?: Subset<T, pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidoGroupByArgs['orderBy'] }
        : { orderBy?: pedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido model
   */
  readonly fields: pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itens<T extends pedido$itensArgs<ExtArgs> = {}>(args?: Subset<T, pedido$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pedido model
   */
  interface pedidoFieldRefs {
    readonly pedido_id: FieldRef<"pedido", 'Int'>
    readonly usuario_id: FieldRef<"pedido", 'Int'>
    readonly restaurante_id: FieldRef<"pedido", 'Int'>
    readonly pedido_status: FieldRef<"pedido", 'Int'>
    readonly pedido_valor_total: FieldRef<"pedido", 'Float'>
    readonly pedido_criacao_pedido: FieldRef<"pedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pedido findUnique
   */
  export type pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findUniqueOrThrow
   */
  export type pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findFirst
   */
  export type pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findFirstOrThrow
   */
  export type pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findMany
   */
  export type pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido create
   */
  export type pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido.
     */
    data: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
  }

  /**
   * pedido createMany
   */
  export type pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido update
   */
  export type pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido.
     */
    data: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
    /**
     * Choose, which pedido to update.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido updateMany
   */
  export type pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido upsert
   */
  export type pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: pedidoWhereUniqueInput
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
  }

  /**
   * pedido delete
   */
  export type pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter which pedido to delete.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido deleteMany
   */
  export type pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number
  }

  /**
   * pedido.itens
   */
  export type pedido$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    where?: item_pedidoWhereInput
    orderBy?: item_pedidoOrderByWithRelationInput | item_pedidoOrderByWithRelationInput[]
    cursor?: item_pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Item_pedidoScalarFieldEnum | Item_pedidoScalarFieldEnum[]
  }

  /**
   * pedido without action
   */
  export type pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
  }


  /**
   * Model item_pedido
   */

  export type AggregateItem_pedido = {
    _count: Item_pedidoCountAggregateOutputType | null
    _avg: Item_pedidoAvgAggregateOutputType | null
    _sum: Item_pedidoSumAggregateOutputType | null
    _min: Item_pedidoMinAggregateOutputType | null
    _max: Item_pedidoMaxAggregateOutputType | null
  }

  export type Item_pedidoAvgAggregateOutputType = {
    item_pedido_id: number | null
    item_pedido_quantidade: number | null
    item_pedido_preco: number | null
    pedido_id: number | null
    prato_id: number | null
  }

  export type Item_pedidoSumAggregateOutputType = {
    item_pedido_id: number | null
    item_pedido_quantidade: number | null
    item_pedido_preco: number | null
    pedido_id: number | null
    prato_id: number | null
  }

  export type Item_pedidoMinAggregateOutputType = {
    item_pedido_id: number | null
    item_pedido_quantidade: number | null
    item_pedido_preco: number | null
    pedido_id: number | null
    prato_id: number | null
  }

  export type Item_pedidoMaxAggregateOutputType = {
    item_pedido_id: number | null
    item_pedido_quantidade: number | null
    item_pedido_preco: number | null
    pedido_id: number | null
    prato_id: number | null
  }

  export type Item_pedidoCountAggregateOutputType = {
    item_pedido_id: number
    item_pedido_quantidade: number
    item_pedido_preco: number
    pedido_id: number
    prato_id: number
    _all: number
  }


  export type Item_pedidoAvgAggregateInputType = {
    item_pedido_id?: true
    item_pedido_quantidade?: true
    item_pedido_preco?: true
    pedido_id?: true
    prato_id?: true
  }

  export type Item_pedidoSumAggregateInputType = {
    item_pedido_id?: true
    item_pedido_quantidade?: true
    item_pedido_preco?: true
    pedido_id?: true
    prato_id?: true
  }

  export type Item_pedidoMinAggregateInputType = {
    item_pedido_id?: true
    item_pedido_quantidade?: true
    item_pedido_preco?: true
    pedido_id?: true
    prato_id?: true
  }

  export type Item_pedidoMaxAggregateInputType = {
    item_pedido_id?: true
    item_pedido_quantidade?: true
    item_pedido_preco?: true
    pedido_id?: true
    prato_id?: true
  }

  export type Item_pedidoCountAggregateInputType = {
    item_pedido_id?: true
    item_pedido_quantidade?: true
    item_pedido_preco?: true
    pedido_id?: true
    prato_id?: true
    _all?: true
  }

  export type Item_pedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_pedido to aggregate.
     */
    where?: item_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_pedidos to fetch.
     */
    orderBy?: item_pedidoOrderByWithRelationInput | item_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: item_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned item_pedidos
    **/
    _count?: true | Item_pedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Item_pedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Item_pedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Item_pedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Item_pedidoMaxAggregateInputType
  }

  export type GetItem_pedidoAggregateType<T extends Item_pedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItem_pedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem_pedido[P]>
      : GetScalarType<T[P], AggregateItem_pedido[P]>
  }




  export type item_pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: item_pedidoWhereInput
    orderBy?: item_pedidoOrderByWithAggregationInput | item_pedidoOrderByWithAggregationInput[]
    by: Item_pedidoScalarFieldEnum[] | Item_pedidoScalarFieldEnum
    having?: item_pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Item_pedidoCountAggregateInputType | true
    _avg?: Item_pedidoAvgAggregateInputType
    _sum?: Item_pedidoSumAggregateInputType
    _min?: Item_pedidoMinAggregateInputType
    _max?: Item_pedidoMaxAggregateInputType
  }

  export type Item_pedidoGroupByOutputType = {
    item_pedido_id: number
    item_pedido_quantidade: number
    item_pedido_preco: number
    pedido_id: number
    prato_id: number
    _count: Item_pedidoCountAggregateOutputType | null
    _avg: Item_pedidoAvgAggregateOutputType | null
    _sum: Item_pedidoSumAggregateOutputType | null
    _min: Item_pedidoMinAggregateOutputType | null
    _max: Item_pedidoMaxAggregateOutputType | null
  }

  type GetItem_pedidoGroupByPayload<T extends item_pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Item_pedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Item_pedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Item_pedidoGroupByOutputType[P]>
            : GetScalarType<T[P], Item_pedidoGroupByOutputType[P]>
        }
      >
    >


  export type item_pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_pedido_id?: boolean
    item_pedido_quantidade?: boolean
    item_pedido_preco?: boolean
    pedido_id?: boolean
    prato_id?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item_pedido"]>



  export type item_pedidoSelectScalar = {
    item_pedido_id?: boolean
    item_pedido_quantidade?: boolean
    item_pedido_preco?: boolean
    pedido_id?: boolean
    prato_id?: boolean
  }

  export type item_pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_pedido_id" | "item_pedido_quantidade" | "item_pedido_preco" | "pedido_id" | "prato_id", ExtArgs["result"]["item_pedido"]>
  export type item_pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }

  export type $item_pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item_pedido"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      item_pedido_id: number
      item_pedido_quantidade: number
      item_pedido_preco: number
      pedido_id: number
      prato_id: number
    }, ExtArgs["result"]["item_pedido"]>
    composites: {}
  }

  type item_pedidoGetPayload<S extends boolean | null | undefined | item_pedidoDefaultArgs> = $Result.GetResult<Prisma.$item_pedidoPayload, S>

  type item_pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<item_pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Item_pedidoCountAggregateInputType | true
    }

  export interface item_pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item_pedido'], meta: { name: 'item_pedido' } }
    /**
     * Find zero or one Item_pedido that matches the filter.
     * @param {item_pedidoFindUniqueArgs} args - Arguments to find a Item_pedido
     * @example
     * // Get one Item_pedido
     * const item_pedido = await prisma.item_pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends item_pedidoFindUniqueArgs>(args: SelectSubset<T, item_pedidoFindUniqueArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item_pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {item_pedidoFindUniqueOrThrowArgs} args - Arguments to find a Item_pedido
     * @example
     * // Get one Item_pedido
     * const item_pedido = await prisma.item_pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends item_pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, item_pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_pedidoFindFirstArgs} args - Arguments to find a Item_pedido
     * @example
     * // Get one Item_pedido
     * const item_pedido = await prisma.item_pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends item_pedidoFindFirstArgs>(args?: SelectSubset<T, item_pedidoFindFirstArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item_pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_pedidoFindFirstOrThrowArgs} args - Arguments to find a Item_pedido
     * @example
     * // Get one Item_pedido
     * const item_pedido = await prisma.item_pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends item_pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, item_pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Item_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Item_pedidos
     * const item_pedidos = await prisma.item_pedido.findMany()
     * 
     * // Get first 10 Item_pedidos
     * const item_pedidos = await prisma.item_pedido.findMany({ take: 10 })
     * 
     * // Only select the `item_pedido_id`
     * const item_pedidoWithItem_pedido_idOnly = await prisma.item_pedido.findMany({ select: { item_pedido_id: true } })
     * 
     */
    findMany<T extends item_pedidoFindManyArgs>(args?: SelectSubset<T, item_pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item_pedido.
     * @param {item_pedidoCreateArgs} args - Arguments to create a Item_pedido.
     * @example
     * // Create one Item_pedido
     * const Item_pedido = await prisma.item_pedido.create({
     *   data: {
     *     // ... data to create a Item_pedido
     *   }
     * })
     * 
     */
    create<T extends item_pedidoCreateArgs>(args: SelectSubset<T, item_pedidoCreateArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Item_pedidos.
     * @param {item_pedidoCreateManyArgs} args - Arguments to create many Item_pedidos.
     * @example
     * // Create many Item_pedidos
     * const item_pedido = await prisma.item_pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends item_pedidoCreateManyArgs>(args?: SelectSubset<T, item_pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item_pedido.
     * @param {item_pedidoDeleteArgs} args - Arguments to delete one Item_pedido.
     * @example
     * // Delete one Item_pedido
     * const Item_pedido = await prisma.item_pedido.delete({
     *   where: {
     *     // ... filter to delete one Item_pedido
     *   }
     * })
     * 
     */
    delete<T extends item_pedidoDeleteArgs>(args: SelectSubset<T, item_pedidoDeleteArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item_pedido.
     * @param {item_pedidoUpdateArgs} args - Arguments to update one Item_pedido.
     * @example
     * // Update one Item_pedido
     * const item_pedido = await prisma.item_pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends item_pedidoUpdateArgs>(args: SelectSubset<T, item_pedidoUpdateArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Item_pedidos.
     * @param {item_pedidoDeleteManyArgs} args - Arguments to filter Item_pedidos to delete.
     * @example
     * // Delete a few Item_pedidos
     * const { count } = await prisma.item_pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends item_pedidoDeleteManyArgs>(args?: SelectSubset<T, item_pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Item_pedidos
     * const item_pedido = await prisma.item_pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends item_pedidoUpdateManyArgs>(args: SelectSubset<T, item_pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item_pedido.
     * @param {item_pedidoUpsertArgs} args - Arguments to update or create a Item_pedido.
     * @example
     * // Update or create a Item_pedido
     * const item_pedido = await prisma.item_pedido.upsert({
     *   create: {
     *     // ... data to create a Item_pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item_pedido we want to update
     *   }
     * })
     */
    upsert<T extends item_pedidoUpsertArgs>(args: SelectSubset<T, item_pedidoUpsertArgs<ExtArgs>>): Prisma__item_pedidoClient<$Result.GetResult<Prisma.$item_pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Item_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_pedidoCountArgs} args - Arguments to filter Item_pedidos to count.
     * @example
     * // Count the number of Item_pedidos
     * const count = await prisma.item_pedido.count({
     *   where: {
     *     // ... the filter for the Item_pedidos we want to count
     *   }
     * })
    **/
    count<T extends item_pedidoCountArgs>(
      args?: Subset<T, item_pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Item_pedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_pedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Item_pedidoAggregateArgs>(args: Subset<T, Item_pedidoAggregateArgs>): Prisma.PrismaPromise<GetItem_pedidoAggregateType<T>>

    /**
     * Group by Item_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {item_pedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends item_pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: item_pedidoGroupByArgs['orderBy'] }
        : { orderBy?: item_pedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, item_pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItem_pedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item_pedido model
   */
  readonly fields: item_pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item_pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__item_pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the item_pedido model
   */
  interface item_pedidoFieldRefs {
    readonly item_pedido_id: FieldRef<"item_pedido", 'Int'>
    readonly item_pedido_quantidade: FieldRef<"item_pedido", 'Int'>
    readonly item_pedido_preco: FieldRef<"item_pedido", 'Float'>
    readonly pedido_id: FieldRef<"item_pedido", 'Int'>
    readonly prato_id: FieldRef<"item_pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * item_pedido findUnique
   */
  export type item_pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which item_pedido to fetch.
     */
    where: item_pedidoWhereUniqueInput
  }

  /**
   * item_pedido findUniqueOrThrow
   */
  export type item_pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which item_pedido to fetch.
     */
    where: item_pedidoWhereUniqueInput
  }

  /**
   * item_pedido findFirst
   */
  export type item_pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which item_pedido to fetch.
     */
    where?: item_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_pedidos to fetch.
     */
    orderBy?: item_pedidoOrderByWithRelationInput | item_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_pedidos.
     */
    cursor?: item_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_pedidos.
     */
    distinct?: Item_pedidoScalarFieldEnum | Item_pedidoScalarFieldEnum[]
  }

  /**
   * item_pedido findFirstOrThrow
   */
  export type item_pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which item_pedido to fetch.
     */
    where?: item_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_pedidos to fetch.
     */
    orderBy?: item_pedidoOrderByWithRelationInput | item_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for item_pedidos.
     */
    cursor?: item_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of item_pedidos.
     */
    distinct?: Item_pedidoScalarFieldEnum | Item_pedidoScalarFieldEnum[]
  }

  /**
   * item_pedido findMany
   */
  export type item_pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which item_pedidos to fetch.
     */
    where?: item_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of item_pedidos to fetch.
     */
    orderBy?: item_pedidoOrderByWithRelationInput | item_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing item_pedidos.
     */
    cursor?: item_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` item_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` item_pedidos.
     */
    skip?: number
    distinct?: Item_pedidoScalarFieldEnum | Item_pedidoScalarFieldEnum[]
  }

  /**
   * item_pedido create
   */
  export type item_pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a item_pedido.
     */
    data: XOR<item_pedidoCreateInput, item_pedidoUncheckedCreateInput>
  }

  /**
   * item_pedido createMany
   */
  export type item_pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many item_pedidos.
     */
    data: item_pedidoCreateManyInput | item_pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item_pedido update
   */
  export type item_pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a item_pedido.
     */
    data: XOR<item_pedidoUpdateInput, item_pedidoUncheckedUpdateInput>
    /**
     * Choose, which item_pedido to update.
     */
    where: item_pedidoWhereUniqueInput
  }

  /**
   * item_pedido updateMany
   */
  export type item_pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update item_pedidos.
     */
    data: XOR<item_pedidoUpdateManyMutationInput, item_pedidoUncheckedUpdateManyInput>
    /**
     * Filter which item_pedidos to update
     */
    where?: item_pedidoWhereInput
    /**
     * Limit how many item_pedidos to update.
     */
    limit?: number
  }

  /**
   * item_pedido upsert
   */
  export type item_pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the item_pedido to update in case it exists.
     */
    where: item_pedidoWhereUniqueInput
    /**
     * In case the item_pedido found by the `where` argument doesn't exist, create a new item_pedido with this data.
     */
    create: XOR<item_pedidoCreateInput, item_pedidoUncheckedCreateInput>
    /**
     * In case the item_pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<item_pedidoUpdateInput, item_pedidoUncheckedUpdateInput>
  }

  /**
   * item_pedido delete
   */
  export type item_pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
    /**
     * Filter which item_pedido to delete.
     */
    where: item_pedidoWhereUniqueInput
  }

  /**
   * item_pedido deleteMany
   */
  export type item_pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item_pedidos to delete
     */
    where?: item_pedidoWhereInput
    /**
     * Limit how many item_pedidos to delete.
     */
    limit?: number
  }

  /**
   * item_pedido without action
   */
  export type item_pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item_pedido
     */
    select?: item_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item_pedido
     */
    omit?: item_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: item_pedidoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PedidoScalarFieldEnum: {
    pedido_id: 'pedido_id',
    usuario_id: 'usuario_id',
    restaurante_id: 'restaurante_id',
    pedido_status: 'pedido_status',
    pedido_valor_total: 'pedido_valor_total',
    pedido_criacao_pedido: 'pedido_criacao_pedido'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const Item_pedidoScalarFieldEnum: {
    item_pedido_id: 'item_pedido_id',
    item_pedido_quantidade: 'item_pedido_quantidade',
    item_pedido_preco: 'item_pedido_preco',
    pedido_id: 'pedido_id',
    prato_id: 'prato_id'
  };

  export type Item_pedidoScalarFieldEnum = (typeof Item_pedidoScalarFieldEnum)[keyof typeof Item_pedidoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type pedidoWhereInput = {
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    pedido_id?: IntFilter<"pedido"> | number
    usuario_id?: IntFilter<"pedido"> | number
    restaurante_id?: IntFilter<"pedido"> | number
    pedido_status?: IntFilter<"pedido"> | number
    pedido_valor_total?: FloatFilter<"pedido"> | number
    pedido_criacao_pedido?: DateTimeFilter<"pedido"> | Date | string
    itens?: Item_pedidoListRelationFilter
  }

  export type pedidoOrderByWithRelationInput = {
    pedido_id?: SortOrder
    usuario_id?: SortOrder
    restaurante_id?: SortOrder
    pedido_status?: SortOrder
    pedido_valor_total?: SortOrder
    pedido_criacao_pedido?: SortOrder
    itens?: item_pedidoOrderByRelationAggregateInput
  }

  export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    pedido_id?: number
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    usuario_id?: IntFilter<"pedido"> | number
    restaurante_id?: IntFilter<"pedido"> | number
    pedido_status?: IntFilter<"pedido"> | number
    pedido_valor_total?: FloatFilter<"pedido"> | number
    pedido_criacao_pedido?: DateTimeFilter<"pedido"> | Date | string
    itens?: Item_pedidoListRelationFilter
  }, "pedido_id">

  export type pedidoOrderByWithAggregationInput = {
    pedido_id?: SortOrder
    usuario_id?: SortOrder
    restaurante_id?: SortOrder
    pedido_status?: SortOrder
    pedido_valor_total?: SortOrder
    pedido_criacao_pedido?: SortOrder
    _count?: pedidoCountOrderByAggregateInput
    _avg?: pedidoAvgOrderByAggregateInput
    _max?: pedidoMaxOrderByAggregateInput
    _min?: pedidoMinOrderByAggregateInput
    _sum?: pedidoSumOrderByAggregateInput
  }

  export type pedidoScalarWhereWithAggregatesInput = {
    AND?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    OR?: pedidoScalarWhereWithAggregatesInput[]
    NOT?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    pedido_id?: IntWithAggregatesFilter<"pedido"> | number
    usuario_id?: IntWithAggregatesFilter<"pedido"> | number
    restaurante_id?: IntWithAggregatesFilter<"pedido"> | number
    pedido_status?: IntWithAggregatesFilter<"pedido"> | number
    pedido_valor_total?: FloatWithAggregatesFilter<"pedido"> | number
    pedido_criacao_pedido?: DateTimeWithAggregatesFilter<"pedido"> | Date | string
  }

  export type item_pedidoWhereInput = {
    AND?: item_pedidoWhereInput | item_pedidoWhereInput[]
    OR?: item_pedidoWhereInput[]
    NOT?: item_pedidoWhereInput | item_pedidoWhereInput[]
    item_pedido_id?: IntFilter<"item_pedido"> | number
    item_pedido_quantidade?: IntFilter<"item_pedido"> | number
    item_pedido_preco?: FloatFilter<"item_pedido"> | number
    pedido_id?: IntFilter<"item_pedido"> | number
    prato_id?: IntFilter<"item_pedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }

  export type item_pedidoOrderByWithRelationInput = {
    item_pedido_id?: SortOrder
    item_pedido_quantidade?: SortOrder
    item_pedido_preco?: SortOrder
    pedido_id?: SortOrder
    prato_id?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
  }

  export type item_pedidoWhereUniqueInput = Prisma.AtLeast<{
    item_pedido_id?: number
    AND?: item_pedidoWhereInput | item_pedidoWhereInput[]
    OR?: item_pedidoWhereInput[]
    NOT?: item_pedidoWhereInput | item_pedidoWhereInput[]
    item_pedido_quantidade?: IntFilter<"item_pedido"> | number
    item_pedido_preco?: FloatFilter<"item_pedido"> | number
    pedido_id?: IntFilter<"item_pedido"> | number
    prato_id?: IntFilter<"item_pedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }, "item_pedido_id">

  export type item_pedidoOrderByWithAggregationInput = {
    item_pedido_id?: SortOrder
    item_pedido_quantidade?: SortOrder
    item_pedido_preco?: SortOrder
    pedido_id?: SortOrder
    prato_id?: SortOrder
    _count?: item_pedidoCountOrderByAggregateInput
    _avg?: item_pedidoAvgOrderByAggregateInput
    _max?: item_pedidoMaxOrderByAggregateInput
    _min?: item_pedidoMinOrderByAggregateInput
    _sum?: item_pedidoSumOrderByAggregateInput
  }

  export type item_pedidoScalarWhereWithAggregatesInput = {
    AND?: item_pedidoScalarWhereWithAggregatesInput | item_pedidoScalarWhereWithAggregatesInput[]
    OR?: item_pedidoScalarWhereWithAggregatesInput[]
    NOT?: item_pedidoScalarWhereWithAggregatesInput | item_pedidoScalarWhereWithAggregatesInput[]
    item_pedido_id?: IntWithAggregatesFilter<"item_pedido"> | number
    item_pedido_quantidade?: IntWithAggregatesFilter<"item_pedido"> | number
    item_pedido_preco?: FloatWithAggregatesFilter<"item_pedido"> | number
    pedido_id?: IntWithAggregatesFilter<"item_pedido"> | number
    prato_id?: IntWithAggregatesFilter<"item_pedido"> | number
  }

  export type pedidoCreateInput = {
    usuario_id: number
    restaurante_id: number
    pedido_status: number
    pedido_valor_total: number
    pedido_criacao_pedido: Date | string
    itens?: item_pedidoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateInput = {
    pedido_id?: number
    usuario_id: number
    restaurante_id: number
    pedido_status: number
    pedido_valor_total: number
    pedido_criacao_pedido: Date | string
    itens?: item_pedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUpdateInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    restaurante_id?: IntFieldUpdateOperationsInput | number
    pedido_status?: IntFieldUpdateOperationsInput | number
    pedido_valor_total?: FloatFieldUpdateOperationsInput | number
    pedido_criacao_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: item_pedidoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    restaurante_id?: IntFieldUpdateOperationsInput | number
    pedido_status?: IntFieldUpdateOperationsInput | number
    pedido_valor_total?: FloatFieldUpdateOperationsInput | number
    pedido_criacao_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: item_pedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateManyInput = {
    pedido_id?: number
    usuario_id: number
    restaurante_id: number
    pedido_status: number
    pedido_valor_total: number
    pedido_criacao_pedido: Date | string
  }

  export type pedidoUpdateManyMutationInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    restaurante_id?: IntFieldUpdateOperationsInput | number
    pedido_status?: IntFieldUpdateOperationsInput | number
    pedido_valor_total?: FloatFieldUpdateOperationsInput | number
    pedido_criacao_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoUncheckedUpdateManyInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    restaurante_id?: IntFieldUpdateOperationsInput | number
    pedido_status?: IntFieldUpdateOperationsInput | number
    pedido_valor_total?: FloatFieldUpdateOperationsInput | number
    pedido_criacao_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type item_pedidoCreateInput = {
    item_pedido_quantidade: number
    item_pedido_preco: number
    prato_id: number
    pedido: pedidoCreateNestedOneWithoutItensInput
  }

  export type item_pedidoUncheckedCreateInput = {
    item_pedido_id?: number
    item_pedido_quantidade: number
    item_pedido_preco: number
    pedido_id: number
    prato_id: number
  }

  export type item_pedidoUpdateInput = {
    item_pedido_quantidade?: IntFieldUpdateOperationsInput | number
    item_pedido_preco?: FloatFieldUpdateOperationsInput | number
    prato_id?: IntFieldUpdateOperationsInput | number
    pedido?: pedidoUpdateOneRequiredWithoutItensNestedInput
  }

  export type item_pedidoUncheckedUpdateInput = {
    item_pedido_id?: IntFieldUpdateOperationsInput | number
    item_pedido_quantidade?: IntFieldUpdateOperationsInput | number
    item_pedido_preco?: FloatFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    prato_id?: IntFieldUpdateOperationsInput | number
  }

  export type item_pedidoCreateManyInput = {
    item_pedido_id?: number
    item_pedido_quantidade: number
    item_pedido_preco: number
    pedido_id: number
    prato_id: number
  }

  export type item_pedidoUpdateManyMutationInput = {
    item_pedido_quantidade?: IntFieldUpdateOperationsInput | number
    item_pedido_preco?: FloatFieldUpdateOperationsInput | number
    prato_id?: IntFieldUpdateOperationsInput | number
  }

  export type item_pedidoUncheckedUpdateManyInput = {
    item_pedido_id?: IntFieldUpdateOperationsInput | number
    item_pedido_quantidade?: IntFieldUpdateOperationsInput | number
    item_pedido_preco?: FloatFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    prato_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Item_pedidoListRelationFilter = {
    every?: item_pedidoWhereInput
    some?: item_pedidoWhereInput
    none?: item_pedidoWhereInput
  }

  export type item_pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedidoCountOrderByAggregateInput = {
    pedido_id?: SortOrder
    usuario_id?: SortOrder
    restaurante_id?: SortOrder
    pedido_status?: SortOrder
    pedido_valor_total?: SortOrder
    pedido_criacao_pedido?: SortOrder
  }

  export type pedidoAvgOrderByAggregateInput = {
    pedido_id?: SortOrder
    usuario_id?: SortOrder
    restaurante_id?: SortOrder
    pedido_status?: SortOrder
    pedido_valor_total?: SortOrder
  }

  export type pedidoMaxOrderByAggregateInput = {
    pedido_id?: SortOrder
    usuario_id?: SortOrder
    restaurante_id?: SortOrder
    pedido_status?: SortOrder
    pedido_valor_total?: SortOrder
    pedido_criacao_pedido?: SortOrder
  }

  export type pedidoMinOrderByAggregateInput = {
    pedido_id?: SortOrder
    usuario_id?: SortOrder
    restaurante_id?: SortOrder
    pedido_status?: SortOrder
    pedido_valor_total?: SortOrder
    pedido_criacao_pedido?: SortOrder
  }

  export type pedidoSumOrderByAggregateInput = {
    pedido_id?: SortOrder
    usuario_id?: SortOrder
    restaurante_id?: SortOrder
    pedido_status?: SortOrder
    pedido_valor_total?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: pedidoWhereInput
    isNot?: pedidoWhereInput
  }

  export type item_pedidoCountOrderByAggregateInput = {
    item_pedido_id?: SortOrder
    item_pedido_quantidade?: SortOrder
    item_pedido_preco?: SortOrder
    pedido_id?: SortOrder
    prato_id?: SortOrder
  }

  export type item_pedidoAvgOrderByAggregateInput = {
    item_pedido_id?: SortOrder
    item_pedido_quantidade?: SortOrder
    item_pedido_preco?: SortOrder
    pedido_id?: SortOrder
    prato_id?: SortOrder
  }

  export type item_pedidoMaxOrderByAggregateInput = {
    item_pedido_id?: SortOrder
    item_pedido_quantidade?: SortOrder
    item_pedido_preco?: SortOrder
    pedido_id?: SortOrder
    prato_id?: SortOrder
  }

  export type item_pedidoMinOrderByAggregateInput = {
    item_pedido_id?: SortOrder
    item_pedido_quantidade?: SortOrder
    item_pedido_preco?: SortOrder
    pedido_id?: SortOrder
    prato_id?: SortOrder
  }

  export type item_pedidoSumOrderByAggregateInput = {
    item_pedido_id?: SortOrder
    item_pedido_quantidade?: SortOrder
    item_pedido_preco?: SortOrder
    pedido_id?: SortOrder
    prato_id?: SortOrder
  }

  export type item_pedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<item_pedidoCreateWithoutPedidoInput, item_pedidoUncheckedCreateWithoutPedidoInput> | item_pedidoCreateWithoutPedidoInput[] | item_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: item_pedidoCreateOrConnectWithoutPedidoInput | item_pedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: item_pedidoCreateManyPedidoInputEnvelope
    connect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
  }

  export type item_pedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<item_pedidoCreateWithoutPedidoInput, item_pedidoUncheckedCreateWithoutPedidoInput> | item_pedidoCreateWithoutPedidoInput[] | item_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: item_pedidoCreateOrConnectWithoutPedidoInput | item_pedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: item_pedidoCreateManyPedidoInputEnvelope
    connect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type item_pedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<item_pedidoCreateWithoutPedidoInput, item_pedidoUncheckedCreateWithoutPedidoInput> | item_pedidoCreateWithoutPedidoInput[] | item_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: item_pedidoCreateOrConnectWithoutPedidoInput | item_pedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: item_pedidoUpsertWithWhereUniqueWithoutPedidoInput | item_pedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: item_pedidoCreateManyPedidoInputEnvelope
    set?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    disconnect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    delete?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    connect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    update?: item_pedidoUpdateWithWhereUniqueWithoutPedidoInput | item_pedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: item_pedidoUpdateManyWithWhereWithoutPedidoInput | item_pedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: item_pedidoScalarWhereInput | item_pedidoScalarWhereInput[]
  }

  export type item_pedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<item_pedidoCreateWithoutPedidoInput, item_pedidoUncheckedCreateWithoutPedidoInput> | item_pedidoCreateWithoutPedidoInput[] | item_pedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: item_pedidoCreateOrConnectWithoutPedidoInput | item_pedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: item_pedidoUpsertWithWhereUniqueWithoutPedidoInput | item_pedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: item_pedidoCreateManyPedidoInputEnvelope
    set?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    disconnect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    delete?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    connect?: item_pedidoWhereUniqueInput | item_pedidoWhereUniqueInput[]
    update?: item_pedidoUpdateWithWhereUniqueWithoutPedidoInput | item_pedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: item_pedidoUpdateManyWithWhereWithoutPedidoInput | item_pedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: item_pedidoScalarWhereInput | item_pedidoScalarWhereInput[]
  }

  export type pedidoCreateNestedOneWithoutItensInput = {
    create?: XOR<pedidoCreateWithoutItensInput, pedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutItensInput
    connect?: pedidoWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<pedidoCreateWithoutItensInput, pedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutItensInput
    upsert?: pedidoUpsertWithoutItensInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutItensInput, pedidoUpdateWithoutItensInput>, pedidoUncheckedUpdateWithoutItensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type item_pedidoCreateWithoutPedidoInput = {
    item_pedido_quantidade: number
    item_pedido_preco: number
    prato_id: number
  }

  export type item_pedidoUncheckedCreateWithoutPedidoInput = {
    item_pedido_id?: number
    item_pedido_quantidade: number
    item_pedido_preco: number
    prato_id: number
  }

  export type item_pedidoCreateOrConnectWithoutPedidoInput = {
    where: item_pedidoWhereUniqueInput
    create: XOR<item_pedidoCreateWithoutPedidoInput, item_pedidoUncheckedCreateWithoutPedidoInput>
  }

  export type item_pedidoCreateManyPedidoInputEnvelope = {
    data: item_pedidoCreateManyPedidoInput | item_pedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type item_pedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: item_pedidoWhereUniqueInput
    update: XOR<item_pedidoUpdateWithoutPedidoInput, item_pedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<item_pedidoCreateWithoutPedidoInput, item_pedidoUncheckedCreateWithoutPedidoInput>
  }

  export type item_pedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: item_pedidoWhereUniqueInput
    data: XOR<item_pedidoUpdateWithoutPedidoInput, item_pedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type item_pedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: item_pedidoScalarWhereInput
    data: XOR<item_pedidoUpdateManyMutationInput, item_pedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type item_pedidoScalarWhereInput = {
    AND?: item_pedidoScalarWhereInput | item_pedidoScalarWhereInput[]
    OR?: item_pedidoScalarWhereInput[]
    NOT?: item_pedidoScalarWhereInput | item_pedidoScalarWhereInput[]
    item_pedido_id?: IntFilter<"item_pedido"> | number
    item_pedido_quantidade?: IntFilter<"item_pedido"> | number
    item_pedido_preco?: FloatFilter<"item_pedido"> | number
    pedido_id?: IntFilter<"item_pedido"> | number
    prato_id?: IntFilter<"item_pedido"> | number
  }

  export type pedidoCreateWithoutItensInput = {
    usuario_id: number
    restaurante_id: number
    pedido_status: number
    pedido_valor_total: number
    pedido_criacao_pedido: Date | string
  }

  export type pedidoUncheckedCreateWithoutItensInput = {
    pedido_id?: number
    usuario_id: number
    restaurante_id: number
    pedido_status: number
    pedido_valor_total: number
    pedido_criacao_pedido: Date | string
  }

  export type pedidoCreateOrConnectWithoutItensInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutItensInput, pedidoUncheckedCreateWithoutItensInput>
  }

  export type pedidoUpsertWithoutItensInput = {
    update: XOR<pedidoUpdateWithoutItensInput, pedidoUncheckedUpdateWithoutItensInput>
    create: XOR<pedidoCreateWithoutItensInput, pedidoUncheckedCreateWithoutItensInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutItensInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutItensInput, pedidoUncheckedUpdateWithoutItensInput>
  }

  export type pedidoUpdateWithoutItensInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    restaurante_id?: IntFieldUpdateOperationsInput | number
    pedido_status?: IntFieldUpdateOperationsInput | number
    pedido_valor_total?: FloatFieldUpdateOperationsInput | number
    pedido_criacao_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoUncheckedUpdateWithoutItensInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    restaurante_id?: IntFieldUpdateOperationsInput | number
    pedido_status?: IntFieldUpdateOperationsInput | number
    pedido_valor_total?: FloatFieldUpdateOperationsInput | number
    pedido_criacao_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type item_pedidoCreateManyPedidoInput = {
    item_pedido_id?: number
    item_pedido_quantidade: number
    item_pedido_preco: number
    prato_id: number
  }

  export type item_pedidoUpdateWithoutPedidoInput = {
    item_pedido_quantidade?: IntFieldUpdateOperationsInput | number
    item_pedido_preco?: FloatFieldUpdateOperationsInput | number
    prato_id?: IntFieldUpdateOperationsInput | number
  }

  export type item_pedidoUncheckedUpdateWithoutPedidoInput = {
    item_pedido_id?: IntFieldUpdateOperationsInput | number
    item_pedido_quantidade?: IntFieldUpdateOperationsInput | number
    item_pedido_preco?: FloatFieldUpdateOperationsInput | number
    prato_id?: IntFieldUpdateOperationsInput | number
  }

  export type item_pedidoUncheckedUpdateManyWithoutPedidoInput = {
    item_pedido_id?: IntFieldUpdateOperationsInput | number
    item_pedido_quantidade?: IntFieldUpdateOperationsInput | number
    item_pedido_preco?: FloatFieldUpdateOperationsInput | number
    prato_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}