
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
 * Model organization
 * 
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model organization_group_users
 * 
 */
export type organization_group_users = $Result.DefaultSelection<Prisma.$organization_group_usersPayload>
/**
 * Model survey
 * 
 */
export type survey = $Result.DefaultSelection<Prisma.$surveyPayload>
/**
 * Model user_surveys
 * 
 */
export type user_surveys = $Result.DefaultSelection<Prisma.$user_surveysPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs>;

  /**
   * `prisma.organization_group_users`: Exposes CRUD operations for the **organization_group_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organization_group_users
    * const organization_group_users = await prisma.organization_group_users.findMany()
    * ```
    */
  get organization_group_users(): Prisma.organization_group_usersDelegate<ExtArgs>;

  /**
   * `prisma.survey`: Exposes CRUD operations for the **survey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surveys
    * const surveys = await prisma.survey.findMany()
    * ```
    */
  get survey(): Prisma.surveyDelegate<ExtArgs>;

  /**
   * `prisma.user_surveys`: Exposes CRUD operations for the **user_surveys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_surveys
    * const user_surveys = await prisma.user_surveys.findMany()
    * ```
    */
  get user_surveys(): Prisma.user_surveysDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    organization: 'organization',
    roles: 'roles',
    organization_group_users: 'organization_group_users',
    survey: 'survey',
    user_surveys: 'user_surveys',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'organization' | 'roles' | 'organization_group_users' | 'survey' | 'user_surveys' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>
        fields: Prisma.organizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[]
          }
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>,
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>,
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      organization_group_users: {
        payload: Prisma.$organization_group_usersPayload<ExtArgs>
        fields: Prisma.organization_group_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organization_group_usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organization_group_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organization_group_usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organization_group_usersPayload>
          }
          findFirst: {
            args: Prisma.organization_group_usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organization_group_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organization_group_usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organization_group_usersPayload>
          }
          findMany: {
            args: Prisma.organization_group_usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organization_group_usersPayload>[]
          }
          create: {
            args: Prisma.organization_group_usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organization_group_usersPayload>
          }
          createMany: {
            args: Prisma.organization_group_usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.organization_group_usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organization_group_usersPayload>
          }
          update: {
            args: Prisma.organization_group_usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organization_group_usersPayload>
          }
          deleteMany: {
            args: Prisma.organization_group_usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.organization_group_usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.organization_group_usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$organization_group_usersPayload>
          }
          aggregate: {
            args: Prisma.Organization_group_usersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrganization_group_users>
          }
          groupBy: {
            args: Prisma.organization_group_usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Organization_group_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.organization_group_usersCountArgs<ExtArgs>,
            result: $Utils.Optional<Organization_group_usersCountAggregateOutputType> | number
          }
        }
      }
      survey: {
        payload: Prisma.$surveyPayload<ExtArgs>
        fields: Prisma.surveyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.surveyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$surveyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.surveyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$surveyPayload>
          }
          findFirst: {
            args: Prisma.surveyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$surveyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.surveyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$surveyPayload>
          }
          findMany: {
            args: Prisma.surveyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$surveyPayload>[]
          }
          create: {
            args: Prisma.surveyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$surveyPayload>
          }
          createMany: {
            args: Prisma.surveyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.surveyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$surveyPayload>
          }
          update: {
            args: Prisma.surveyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$surveyPayload>
          }
          deleteMany: {
            args: Prisma.surveyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.surveyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.surveyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$surveyPayload>
          }
          aggregate: {
            args: Prisma.SurveyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSurvey>
          }
          groupBy: {
            args: Prisma.surveyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SurveyGroupByOutputType>[]
          }
          count: {
            args: Prisma.surveyCountArgs<ExtArgs>,
            result: $Utils.Optional<SurveyCountAggregateOutputType> | number
          }
        }
      }
      user_surveys: {
        payload: Prisma.$user_surveysPayload<ExtArgs>
        fields: Prisma.user_surveysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_surveysFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_surveysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_surveysFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_surveysPayload>
          }
          findFirst: {
            args: Prisma.user_surveysFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_surveysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_surveysFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_surveysPayload>
          }
          findMany: {
            args: Prisma.user_surveysFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_surveysPayload>[]
          }
          create: {
            args: Prisma.user_surveysCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_surveysPayload>
          }
          createMany: {
            args: Prisma.user_surveysCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_surveysDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_surveysPayload>
          }
          update: {
            args: Prisma.user_surveysUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_surveysPayload>
          }
          deleteMany: {
            args: Prisma.user_surveysDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_surveysUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_surveysUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_surveysPayload>
          }
          aggregate: {
            args: Prisma.User_surveysAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_surveys>
          }
          groupBy: {
            args: Prisma.user_surveysGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_surveysGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_surveysCountArgs<ExtArgs>,
            result: $Utils.Optional<User_surveysCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }



  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }



  /**
   * Count Type Organization_group_usersCountOutputType
   */

  export type Organization_group_usersCountOutputType = {
    users: number
  }

  export type Organization_group_usersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization_group_usersCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * Organization_group_usersCountOutputType without action
   */
  export type Organization_group_usersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_group_usersCountOutputType
     */
    select?: Organization_group_usersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Organization_group_usersCountOutputType without action
   */
  export type Organization_group_usersCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }



  /**
   * Count Type SurveyCountOutputType
   */

  export type SurveyCountOutputType = {
    users: number
  }

  export type SurveyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SurveyCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * SurveyCountOutputType without action
   */
  export type SurveyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyCountOutputType
     */
    select?: SurveyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SurveyCountOutputType without action
   */
  export type SurveyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }



  /**
   * Count Type User_surveysCountOutputType
   */

  export type User_surveysCountOutputType = {
    users: number
  }

  export type User_surveysCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | User_surveysCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * User_surveysCountOutputType without action
   */
  export type User_surveysCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_surveysCountOutputType
     */
    select?: User_surveysCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * User_surveysCountOutputType without action
   */
  export type User_surveysCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    organization_group_users: number
    survey: number
    user_surveys: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization_group_users?: boolean | UsersCountOutputTypeCountOrganization_group_usersArgs
    survey?: boolean | UsersCountOutputTypeCountSurveyArgs
    user_surveys?: boolean | UsersCountOutputTypeCountUser_surveysArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrganization_group_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organization_group_usersWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSurveyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: surveyWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_surveysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_surveysWhereInput
  }



  /**
   * Models
   */

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: organizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | organization$usersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type organizationSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | organization$usersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organization"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }


  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<Prisma.$organizationPayload, S>

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<organizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization'], meta: { name: 'organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
    **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
    **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
    **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
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
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organization model
   */
  readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the organization model
   */ 
  interface organizationFieldRefs {
    readonly id: FieldRef<"organization", 'Int'>
    readonly name: FieldRef<"organization", 'String'>
  }
    

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput
  }


  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput
  }


  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }


  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }


  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }


  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>
  }


  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput
  }


  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput
  }


  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
  }


  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput
  }


  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput
  }


  /**
   * organization.users
   */
  export type organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null
  }



  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }


  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends rolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
    **/
    create<T extends rolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rolesCreateArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const roles = await prisma.roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
    **/
    delete<T extends rolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
    **/
    upsert<T extends rolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
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
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the roles model
   */ 
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'Int'>
    readonly name: FieldRef<"roles", 'String'>
  }
    

  // Custom InputTypes

  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }


  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
  }


  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }


  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
  }


  /**
   * roles.users
   */
  export type roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
  }



  /**
   * Model organization_group_users
   */

  export type AggregateOrganization_group_users = {
    _count: Organization_group_usersCountAggregateOutputType | null
    _avg: Organization_group_usersAvgAggregateOutputType | null
    _sum: Organization_group_usersSumAggregateOutputType | null
    _min: Organization_group_usersMinAggregateOutputType | null
    _max: Organization_group_usersMaxAggregateOutputType | null
  }

  export type Organization_group_usersAvgAggregateOutputType = {
    id: number | null
  }

  export type Organization_group_usersSumAggregateOutputType = {
    id: number | null
  }

  export type Organization_group_usersMinAggregateOutputType = {
    id: number | null
  }

  export type Organization_group_usersMaxAggregateOutputType = {
    id: number | null
  }

  export type Organization_group_usersCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type Organization_group_usersAvgAggregateInputType = {
    id?: true
  }

  export type Organization_group_usersSumAggregateInputType = {
    id?: true
  }

  export type Organization_group_usersMinAggregateInputType = {
    id?: true
  }

  export type Organization_group_usersMaxAggregateInputType = {
    id?: true
  }

  export type Organization_group_usersCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type Organization_group_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization_group_users to aggregate.
     */
    where?: organization_group_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_group_users to fetch.
     */
    orderBy?: organization_group_usersOrderByWithRelationInput | organization_group_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organization_group_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_group_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_group_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organization_group_users
    **/
    _count?: true | Organization_group_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Organization_group_usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Organization_group_usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Organization_group_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Organization_group_usersMaxAggregateInputType
  }

  export type GetOrganization_group_usersAggregateType<T extends Organization_group_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization_group_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization_group_users[P]>
      : GetScalarType<T[P], AggregateOrganization_group_users[P]>
  }




  export type organization_group_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organization_group_usersWhereInput
    orderBy?: organization_group_usersOrderByWithAggregationInput | organization_group_usersOrderByWithAggregationInput[]
    by: Organization_group_usersScalarFieldEnum[] | Organization_group_usersScalarFieldEnum
    having?: organization_group_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Organization_group_usersCountAggregateInputType | true
    _avg?: Organization_group_usersAvgAggregateInputType
    _sum?: Organization_group_usersSumAggregateInputType
    _min?: Organization_group_usersMinAggregateInputType
    _max?: Organization_group_usersMaxAggregateInputType
  }

  export type Organization_group_usersGroupByOutputType = {
    id: number
    _count: Organization_group_usersCountAggregateOutputType | null
    _avg: Organization_group_usersAvgAggregateOutputType | null
    _sum: Organization_group_usersSumAggregateOutputType | null
    _min: Organization_group_usersMinAggregateOutputType | null
    _max: Organization_group_usersMaxAggregateOutputType | null
  }

  type GetOrganization_group_usersGroupByPayload<T extends organization_group_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Organization_group_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Organization_group_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Organization_group_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Organization_group_usersGroupByOutputType[P]>
        }
      >
    >


  export type organization_group_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    users?: boolean | organization_group_users$usersArgs<ExtArgs>
    _count?: boolean | Organization_group_usersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization_group_users"]>

  export type organization_group_usersSelectScalar = {
    id?: boolean
  }

  export type organization_group_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | organization_group_users$usersArgs<ExtArgs>
    _count?: boolean | Organization_group_usersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $organization_group_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organization_group_users"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["organization_group_users"]>
    composites: {}
  }


  type organization_group_usersGetPayload<S extends boolean | null | undefined | organization_group_usersDefaultArgs> = $Result.GetResult<Prisma.$organization_group_usersPayload, S>

  type organization_group_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<organization_group_usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Organization_group_usersCountAggregateInputType | true
    }

  export interface organization_group_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization_group_users'], meta: { name: 'organization_group_users' } }
    /**
     * Find zero or one Organization_group_users that matches the filter.
     * @param {organization_group_usersFindUniqueArgs} args - Arguments to find a Organization_group_users
     * @example
     * // Get one Organization_group_users
     * const organization_group_users = await prisma.organization_group_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends organization_group_usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organization_group_usersFindUniqueArgs<ExtArgs>>
    ): Prisma__organization_group_usersClient<$Result.GetResult<Prisma.$organization_group_usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Organization_group_users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {organization_group_usersFindUniqueOrThrowArgs} args - Arguments to find a Organization_group_users
     * @example
     * // Get one Organization_group_users
     * const organization_group_users = await prisma.organization_group_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends organization_group_usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organization_group_usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__organization_group_usersClient<$Result.GetResult<Prisma.$organization_group_usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Organization_group_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_group_usersFindFirstArgs} args - Arguments to find a Organization_group_users
     * @example
     * // Get one Organization_group_users
     * const organization_group_users = await prisma.organization_group_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends organization_group_usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organization_group_usersFindFirstArgs<ExtArgs>>
    ): Prisma__organization_group_usersClient<$Result.GetResult<Prisma.$organization_group_usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Organization_group_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_group_usersFindFirstOrThrowArgs} args - Arguments to find a Organization_group_users
     * @example
     * // Get one Organization_group_users
     * const organization_group_users = await prisma.organization_group_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends organization_group_usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organization_group_usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__organization_group_usersClient<$Result.GetResult<Prisma.$organization_group_usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Organization_group_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_group_usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organization_group_users
     * const organization_group_users = await prisma.organization_group_users.findMany()
     * 
     * // Get first 10 Organization_group_users
     * const organization_group_users = await prisma.organization_group_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organization_group_usersWithIdOnly = await prisma.organization_group_users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends organization_group_usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organization_group_usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organization_group_usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Organization_group_users.
     * @param {organization_group_usersCreateArgs} args - Arguments to create a Organization_group_users.
     * @example
     * // Create one Organization_group_users
     * const Organization_group_users = await prisma.organization_group_users.create({
     *   data: {
     *     // ... data to create a Organization_group_users
     *   }
     * })
     * 
    **/
    create<T extends organization_group_usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organization_group_usersCreateArgs<ExtArgs>>
    ): Prisma__organization_group_usersClient<$Result.GetResult<Prisma.$organization_group_usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Organization_group_users.
     *     @param {organization_group_usersCreateManyArgs} args - Arguments to create many Organization_group_users.
     *     @example
     *     // Create many Organization_group_users
     *     const organization_group_users = await prisma.organization_group_users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends organization_group_usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organization_group_usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization_group_users.
     * @param {organization_group_usersDeleteArgs} args - Arguments to delete one Organization_group_users.
     * @example
     * // Delete one Organization_group_users
     * const Organization_group_users = await prisma.organization_group_users.delete({
     *   where: {
     *     // ... filter to delete one Organization_group_users
     *   }
     * })
     * 
    **/
    delete<T extends organization_group_usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organization_group_usersDeleteArgs<ExtArgs>>
    ): Prisma__organization_group_usersClient<$Result.GetResult<Prisma.$organization_group_usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Organization_group_users.
     * @param {organization_group_usersUpdateArgs} args - Arguments to update one Organization_group_users.
     * @example
     * // Update one Organization_group_users
     * const organization_group_users = await prisma.organization_group_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends organization_group_usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organization_group_usersUpdateArgs<ExtArgs>>
    ): Prisma__organization_group_usersClient<$Result.GetResult<Prisma.$organization_group_usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Organization_group_users.
     * @param {organization_group_usersDeleteManyArgs} args - Arguments to filter Organization_group_users to delete.
     * @example
     * // Delete a few Organization_group_users
     * const { count } = await prisma.organization_group_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends organization_group_usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organization_group_usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organization_group_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_group_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organization_group_users
     * const organization_group_users = await prisma.organization_group_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends organization_group_usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organization_group_usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization_group_users.
     * @param {organization_group_usersUpsertArgs} args - Arguments to update or create a Organization_group_users.
     * @example
     * // Update or create a Organization_group_users
     * const organization_group_users = await prisma.organization_group_users.upsert({
     *   create: {
     *     // ... data to create a Organization_group_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization_group_users we want to update
     *   }
     * })
    **/
    upsert<T extends organization_group_usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organization_group_usersUpsertArgs<ExtArgs>>
    ): Prisma__organization_group_usersClient<$Result.GetResult<Prisma.$organization_group_usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Organization_group_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_group_usersCountArgs} args - Arguments to filter Organization_group_users to count.
     * @example
     * // Count the number of Organization_group_users
     * const count = await prisma.organization_group_users.count({
     *   where: {
     *     // ... the filter for the Organization_group_users we want to count
     *   }
     * })
    **/
    count<T extends organization_group_usersCountArgs>(
      args?: Subset<T, organization_group_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Organization_group_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization_group_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_group_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Organization_group_usersAggregateArgs>(args: Subset<T, Organization_group_usersAggregateArgs>): Prisma.PrismaPromise<GetOrganization_group_usersAggregateType<T>>

    /**
     * Group by Organization_group_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organization_group_usersGroupByArgs} args - Group by arguments.
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
      T extends organization_group_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organization_group_usersGroupByArgs['orderBy'] }
        : { orderBy?: organization_group_usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, organization_group_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganization_group_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organization_group_users model
   */
  readonly fields: organization_group_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization_group_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organization_group_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends organization_group_users$usersArgs<ExtArgs> = {}>(args?: Subset<T, organization_group_users$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the organization_group_users model
   */ 
  interface organization_group_usersFieldRefs {
    readonly id: FieldRef<"organization_group_users", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * organization_group_users findUnique
   */
  export type organization_group_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization_group_users
     */
    select?: organization_group_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_group_usersInclude<ExtArgs> | null
    /**
     * Filter, which organization_group_users to fetch.
     */
    where: organization_group_usersWhereUniqueInput
  }


  /**
   * organization_group_users findUniqueOrThrow
   */
  export type organization_group_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization_group_users
     */
    select?: organization_group_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_group_usersInclude<ExtArgs> | null
    /**
     * Filter, which organization_group_users to fetch.
     */
    where: organization_group_usersWhereUniqueInput
  }


  /**
   * organization_group_users findFirst
   */
  export type organization_group_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization_group_users
     */
    select?: organization_group_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_group_usersInclude<ExtArgs> | null
    /**
     * Filter, which organization_group_users to fetch.
     */
    where?: organization_group_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_group_users to fetch.
     */
    orderBy?: organization_group_usersOrderByWithRelationInput | organization_group_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organization_group_users.
     */
    cursor?: organization_group_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_group_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_group_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organization_group_users.
     */
    distinct?: Organization_group_usersScalarFieldEnum | Organization_group_usersScalarFieldEnum[]
  }


  /**
   * organization_group_users findFirstOrThrow
   */
  export type organization_group_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization_group_users
     */
    select?: organization_group_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_group_usersInclude<ExtArgs> | null
    /**
     * Filter, which organization_group_users to fetch.
     */
    where?: organization_group_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_group_users to fetch.
     */
    orderBy?: organization_group_usersOrderByWithRelationInput | organization_group_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organization_group_users.
     */
    cursor?: organization_group_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_group_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_group_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organization_group_users.
     */
    distinct?: Organization_group_usersScalarFieldEnum | Organization_group_usersScalarFieldEnum[]
  }


  /**
   * organization_group_users findMany
   */
  export type organization_group_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization_group_users
     */
    select?: organization_group_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_group_usersInclude<ExtArgs> | null
    /**
     * Filter, which organization_group_users to fetch.
     */
    where?: organization_group_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organization_group_users to fetch.
     */
    orderBy?: organization_group_usersOrderByWithRelationInput | organization_group_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organization_group_users.
     */
    cursor?: organization_group_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organization_group_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organization_group_users.
     */
    skip?: number
    distinct?: Organization_group_usersScalarFieldEnum | Organization_group_usersScalarFieldEnum[]
  }


  /**
   * organization_group_users create
   */
  export type organization_group_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization_group_users
     */
    select?: organization_group_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_group_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a organization_group_users.
     */
    data?: XOR<organization_group_usersCreateInput, organization_group_usersUncheckedCreateInput>
  }


  /**
   * organization_group_users createMany
   */
  export type organization_group_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organization_group_users.
     */
    data: organization_group_usersCreateManyInput | organization_group_usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * organization_group_users update
   */
  export type organization_group_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization_group_users
     */
    select?: organization_group_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_group_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a organization_group_users.
     */
    data: XOR<organization_group_usersUpdateInput, organization_group_usersUncheckedUpdateInput>
    /**
     * Choose, which organization_group_users to update.
     */
    where: organization_group_usersWhereUniqueInput
  }


  /**
   * organization_group_users updateMany
   */
  export type organization_group_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organization_group_users.
     */
    data: XOR<organization_group_usersUpdateManyMutationInput, organization_group_usersUncheckedUpdateManyInput>
    /**
     * Filter which organization_group_users to update
     */
    where?: organization_group_usersWhereInput
  }


  /**
   * organization_group_users upsert
   */
  export type organization_group_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization_group_users
     */
    select?: organization_group_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_group_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the organization_group_users to update in case it exists.
     */
    where: organization_group_usersWhereUniqueInput
    /**
     * In case the organization_group_users found by the `where` argument doesn't exist, create a new organization_group_users with this data.
     */
    create: XOR<organization_group_usersCreateInput, organization_group_usersUncheckedCreateInput>
    /**
     * In case the organization_group_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organization_group_usersUpdateInput, organization_group_usersUncheckedUpdateInput>
  }


  /**
   * organization_group_users delete
   */
  export type organization_group_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization_group_users
     */
    select?: organization_group_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_group_usersInclude<ExtArgs> | null
    /**
     * Filter which organization_group_users to delete.
     */
    where: organization_group_usersWhereUniqueInput
  }


  /**
   * organization_group_users deleteMany
   */
  export type organization_group_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization_group_users to delete
     */
    where?: organization_group_usersWhereInput
  }


  /**
   * organization_group_users.users
   */
  export type organization_group_users$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * organization_group_users without action
   */
  export type organization_group_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization_group_users
     */
    select?: organization_group_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_group_usersInclude<ExtArgs> | null
  }



  /**
   * Model survey
   */

  export type AggregateSurvey = {
    _count: SurveyCountAggregateOutputType | null
    _avg: SurveyAvgAggregateOutputType | null
    _sum: SurveySumAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  export type SurveyAvgAggregateOutputType = {
    id: number | null
  }

  export type SurveySumAggregateOutputType = {
    id: number | null
  }

  export type SurveyMinAggregateOutputType = {
    id: number | null
  }

  export type SurveyMaxAggregateOutputType = {
    id: number | null
  }

  export type SurveyCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type SurveyAvgAggregateInputType = {
    id?: true
  }

  export type SurveySumAggregateInputType = {
    id?: true
  }

  export type SurveyMinAggregateInputType = {
    id?: true
  }

  export type SurveyMaxAggregateInputType = {
    id?: true
  }

  export type SurveyCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type SurveyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which survey to aggregate.
     */
    where?: surveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surveys to fetch.
     */
    orderBy?: surveyOrderByWithRelationInput | surveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: surveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned surveys
    **/
    _count?: true | SurveyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurveyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurveySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyMaxAggregateInputType
  }

  export type GetSurveyAggregateType<T extends SurveyAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvey[P]>
      : GetScalarType<T[P], AggregateSurvey[P]>
  }




  export type surveyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: surveyWhereInput
    orderBy?: surveyOrderByWithAggregationInput | surveyOrderByWithAggregationInput[]
    by: SurveyScalarFieldEnum[] | SurveyScalarFieldEnum
    having?: surveyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyCountAggregateInputType | true
    _avg?: SurveyAvgAggregateInputType
    _sum?: SurveySumAggregateInputType
    _min?: SurveyMinAggregateInputType
    _max?: SurveyMaxAggregateInputType
  }

  export type SurveyGroupByOutputType = {
    id: number
    _count: SurveyCountAggregateOutputType | null
    _avg: SurveyAvgAggregateOutputType | null
    _sum: SurveySumAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  type GetSurveyGroupByPayload<T extends surveyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyGroupByOutputType[P]>
        }
      >
    >


  export type surveySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    users?: boolean | survey$usersArgs<ExtArgs>
    _count?: boolean | SurveyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey"]>

  export type surveySelectScalar = {
    id?: boolean
  }

  export type surveyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | survey$usersArgs<ExtArgs>
    _count?: boolean | SurveyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $surveyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "survey"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["survey"]>
    composites: {}
  }


  type surveyGetPayload<S extends boolean | null | undefined | surveyDefaultArgs> = $Result.GetResult<Prisma.$surveyPayload, S>

  type surveyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<surveyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SurveyCountAggregateInputType | true
    }

  export interface surveyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['survey'], meta: { name: 'survey' } }
    /**
     * Find zero or one Survey that matches the filter.
     * @param {surveyFindUniqueArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends surveyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, surveyFindUniqueArgs<ExtArgs>>
    ): Prisma__surveyClient<$Result.GetResult<Prisma.$surveyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Survey that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {surveyFindUniqueOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends surveyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, surveyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__surveyClient<$Result.GetResult<Prisma.$surveyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Survey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveyFindFirstArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends surveyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, surveyFindFirstArgs<ExtArgs>>
    ): Prisma__surveyClient<$Result.GetResult<Prisma.$surveyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Survey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveyFindFirstOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends surveyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, surveyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__surveyClient<$Result.GetResult<Prisma.$surveyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Surveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surveys
     * const surveys = await prisma.survey.findMany()
     * 
     * // Get first 10 Surveys
     * const surveys = await prisma.survey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyWithIdOnly = await prisma.survey.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends surveyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, surveyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$surveyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Survey.
     * @param {surveyCreateArgs} args - Arguments to create a Survey.
     * @example
     * // Create one Survey
     * const Survey = await prisma.survey.create({
     *   data: {
     *     // ... data to create a Survey
     *   }
     * })
     * 
    **/
    create<T extends surveyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, surveyCreateArgs<ExtArgs>>
    ): Prisma__surveyClient<$Result.GetResult<Prisma.$surveyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Surveys.
     *     @param {surveyCreateManyArgs} args - Arguments to create many Surveys.
     *     @example
     *     // Create many Surveys
     *     const survey = await prisma.survey.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends surveyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, surveyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Survey.
     * @param {surveyDeleteArgs} args - Arguments to delete one Survey.
     * @example
     * // Delete one Survey
     * const Survey = await prisma.survey.delete({
     *   where: {
     *     // ... filter to delete one Survey
     *   }
     * })
     * 
    **/
    delete<T extends surveyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, surveyDeleteArgs<ExtArgs>>
    ): Prisma__surveyClient<$Result.GetResult<Prisma.$surveyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Survey.
     * @param {surveyUpdateArgs} args - Arguments to update one Survey.
     * @example
     * // Update one Survey
     * const survey = await prisma.survey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends surveyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, surveyUpdateArgs<ExtArgs>>
    ): Prisma__surveyClient<$Result.GetResult<Prisma.$surveyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Surveys.
     * @param {surveyDeleteManyArgs} args - Arguments to filter Surveys to delete.
     * @example
     * // Delete a few Surveys
     * const { count } = await prisma.survey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends surveyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, surveyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surveys
     * const survey = await prisma.survey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends surveyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, surveyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Survey.
     * @param {surveyUpsertArgs} args - Arguments to update or create a Survey.
     * @example
     * // Update or create a Survey
     * const survey = await prisma.survey.upsert({
     *   create: {
     *     // ... data to create a Survey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survey we want to update
     *   }
     * })
    **/
    upsert<T extends surveyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, surveyUpsertArgs<ExtArgs>>
    ): Prisma__surveyClient<$Result.GetResult<Prisma.$surveyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveyCountArgs} args - Arguments to filter Surveys to count.
     * @example
     * // Count the number of Surveys
     * const count = await prisma.survey.count({
     *   where: {
     *     // ... the filter for the Surveys we want to count
     *   }
     * })
    **/
    count<T extends surveyCountArgs>(
      args?: Subset<T, surveyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurveyAggregateArgs>(args: Subset<T, SurveyAggregateArgs>): Prisma.PrismaPromise<GetSurveyAggregateType<T>>

    /**
     * Group by Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveyGroupByArgs} args - Group by arguments.
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
      T extends surveyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: surveyGroupByArgs['orderBy'] }
        : { orderBy?: surveyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, surveyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the survey model
   */
  readonly fields: surveyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for survey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__surveyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends survey$usersArgs<ExtArgs> = {}>(args?: Subset<T, survey$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the survey model
   */ 
  interface surveyFieldRefs {
    readonly id: FieldRef<"survey", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * survey findUnique
   */
  export type surveyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survey
     */
    select?: surveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyInclude<ExtArgs> | null
    /**
     * Filter, which survey to fetch.
     */
    where: surveyWhereUniqueInput
  }


  /**
   * survey findUniqueOrThrow
   */
  export type surveyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survey
     */
    select?: surveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyInclude<ExtArgs> | null
    /**
     * Filter, which survey to fetch.
     */
    where: surveyWhereUniqueInput
  }


  /**
   * survey findFirst
   */
  export type surveyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survey
     */
    select?: surveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyInclude<ExtArgs> | null
    /**
     * Filter, which survey to fetch.
     */
    where?: surveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surveys to fetch.
     */
    orderBy?: surveyOrderByWithRelationInput | surveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for surveys.
     */
    cursor?: surveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }


  /**
   * survey findFirstOrThrow
   */
  export type surveyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survey
     */
    select?: surveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyInclude<ExtArgs> | null
    /**
     * Filter, which survey to fetch.
     */
    where?: surveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surveys to fetch.
     */
    orderBy?: surveyOrderByWithRelationInput | surveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for surveys.
     */
    cursor?: surveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }


  /**
   * survey findMany
   */
  export type surveyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survey
     */
    select?: surveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyInclude<ExtArgs> | null
    /**
     * Filter, which surveys to fetch.
     */
    where?: surveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surveys to fetch.
     */
    orderBy?: surveyOrderByWithRelationInput | surveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing surveys.
     */
    cursor?: surveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surveys.
     */
    skip?: number
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }


  /**
   * survey create
   */
  export type surveyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survey
     */
    select?: surveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyInclude<ExtArgs> | null
    /**
     * The data needed to create a survey.
     */
    data?: XOR<surveyCreateInput, surveyUncheckedCreateInput>
  }


  /**
   * survey createMany
   */
  export type surveyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many surveys.
     */
    data: surveyCreateManyInput | surveyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * survey update
   */
  export type surveyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survey
     */
    select?: surveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyInclude<ExtArgs> | null
    /**
     * The data needed to update a survey.
     */
    data: XOR<surveyUpdateInput, surveyUncheckedUpdateInput>
    /**
     * Choose, which survey to update.
     */
    where: surveyWhereUniqueInput
  }


  /**
   * survey updateMany
   */
  export type surveyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update surveys.
     */
    data: XOR<surveyUpdateManyMutationInput, surveyUncheckedUpdateManyInput>
    /**
     * Filter which surveys to update
     */
    where?: surveyWhereInput
  }


  /**
   * survey upsert
   */
  export type surveyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survey
     */
    select?: surveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyInclude<ExtArgs> | null
    /**
     * The filter to search for the survey to update in case it exists.
     */
    where: surveyWhereUniqueInput
    /**
     * In case the survey found by the `where` argument doesn't exist, create a new survey with this data.
     */
    create: XOR<surveyCreateInput, surveyUncheckedCreateInput>
    /**
     * In case the survey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<surveyUpdateInput, surveyUncheckedUpdateInput>
  }


  /**
   * survey delete
   */
  export type surveyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survey
     */
    select?: surveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyInclude<ExtArgs> | null
    /**
     * Filter which survey to delete.
     */
    where: surveyWhereUniqueInput
  }


  /**
   * survey deleteMany
   */
  export type surveyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which surveys to delete
     */
    where?: surveyWhereInput
  }


  /**
   * survey.users
   */
  export type survey$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * survey without action
   */
  export type surveyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survey
     */
    select?: surveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyInclude<ExtArgs> | null
  }



  /**
   * Model user_surveys
   */

  export type AggregateUser_surveys = {
    _count: User_surveysCountAggregateOutputType | null
    _avg: User_surveysAvgAggregateOutputType | null
    _sum: User_surveysSumAggregateOutputType | null
    _min: User_surveysMinAggregateOutputType | null
    _max: User_surveysMaxAggregateOutputType | null
  }

  export type User_surveysAvgAggregateOutputType = {
    id: number | null
  }

  export type User_surveysSumAggregateOutputType = {
    id: number | null
  }

  export type User_surveysMinAggregateOutputType = {
    id: number | null
  }

  export type User_surveysMaxAggregateOutputType = {
    id: number | null
  }

  export type User_surveysCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type User_surveysAvgAggregateInputType = {
    id?: true
  }

  export type User_surveysSumAggregateInputType = {
    id?: true
  }

  export type User_surveysMinAggregateInputType = {
    id?: true
  }

  export type User_surveysMaxAggregateInputType = {
    id?: true
  }

  export type User_surveysCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type User_surveysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_surveys to aggregate.
     */
    where?: user_surveysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_surveys to fetch.
     */
    orderBy?: user_surveysOrderByWithRelationInput | user_surveysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_surveysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_surveys
    **/
    _count?: true | User_surveysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_surveysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_surveysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_surveysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_surveysMaxAggregateInputType
  }

  export type GetUser_surveysAggregateType<T extends User_surveysAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_surveys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_surveys[P]>
      : GetScalarType<T[P], AggregateUser_surveys[P]>
  }




  export type user_surveysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_surveysWhereInput
    orderBy?: user_surveysOrderByWithAggregationInput | user_surveysOrderByWithAggregationInput[]
    by: User_surveysScalarFieldEnum[] | User_surveysScalarFieldEnum
    having?: user_surveysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_surveysCountAggregateInputType | true
    _avg?: User_surveysAvgAggregateInputType
    _sum?: User_surveysSumAggregateInputType
    _min?: User_surveysMinAggregateInputType
    _max?: User_surveysMaxAggregateInputType
  }

  export type User_surveysGroupByOutputType = {
    id: number
    _count: User_surveysCountAggregateOutputType | null
    _avg: User_surveysAvgAggregateOutputType | null
    _sum: User_surveysSumAggregateOutputType | null
    _min: User_surveysMinAggregateOutputType | null
    _max: User_surveysMaxAggregateOutputType | null
  }

  type GetUser_surveysGroupByPayload<T extends user_surveysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_surveysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_surveysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_surveysGroupByOutputType[P]>
            : GetScalarType<T[P], User_surveysGroupByOutputType[P]>
        }
      >
    >


  export type user_surveysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    users?: boolean | user_surveys$usersArgs<ExtArgs>
    _count?: boolean | User_surveysCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_surveys"]>

  export type user_surveysSelectScalar = {
    id?: boolean
  }

  export type user_surveysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_surveys$usersArgs<ExtArgs>
    _count?: boolean | User_surveysCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $user_surveysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_surveys"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["user_surveys"]>
    composites: {}
  }


  type user_surveysGetPayload<S extends boolean | null | undefined | user_surveysDefaultArgs> = $Result.GetResult<Prisma.$user_surveysPayload, S>

  type user_surveysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_surveysFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_surveysCountAggregateInputType | true
    }

  export interface user_surveysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_surveys'], meta: { name: 'user_surveys' } }
    /**
     * Find zero or one User_surveys that matches the filter.
     * @param {user_surveysFindUniqueArgs} args - Arguments to find a User_surveys
     * @example
     * // Get one User_surveys
     * const user_surveys = await prisma.user_surveys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_surveysFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_surveysFindUniqueArgs<ExtArgs>>
    ): Prisma__user_surveysClient<$Result.GetResult<Prisma.$user_surveysPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_surveys that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_surveysFindUniqueOrThrowArgs} args - Arguments to find a User_surveys
     * @example
     * // Get one User_surveys
     * const user_surveys = await prisma.user_surveys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_surveysFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_surveysFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_surveysClient<$Result.GetResult<Prisma.$user_surveysPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_surveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_surveysFindFirstArgs} args - Arguments to find a User_surveys
     * @example
     * // Get one User_surveys
     * const user_surveys = await prisma.user_surveys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_surveysFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_surveysFindFirstArgs<ExtArgs>>
    ): Prisma__user_surveysClient<$Result.GetResult<Prisma.$user_surveysPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_surveys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_surveysFindFirstOrThrowArgs} args - Arguments to find a User_surveys
     * @example
     * // Get one User_surveys
     * const user_surveys = await prisma.user_surveys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_surveysFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_surveysFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_surveysClient<$Result.GetResult<Prisma.$user_surveysPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_surveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_surveysFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_surveys
     * const user_surveys = await prisma.user_surveys.findMany()
     * 
     * // Get first 10 User_surveys
     * const user_surveys = await prisma.user_surveys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_surveysWithIdOnly = await prisma.user_surveys.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_surveysFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_surveysFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_surveysPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_surveys.
     * @param {user_surveysCreateArgs} args - Arguments to create a User_surveys.
     * @example
     * // Create one User_surveys
     * const User_surveys = await prisma.user_surveys.create({
     *   data: {
     *     // ... data to create a User_surveys
     *   }
     * })
     * 
    **/
    create<T extends user_surveysCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_surveysCreateArgs<ExtArgs>>
    ): Prisma__user_surveysClient<$Result.GetResult<Prisma.$user_surveysPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_surveys.
     *     @param {user_surveysCreateManyArgs} args - Arguments to create many User_surveys.
     *     @example
     *     // Create many User_surveys
     *     const user_surveys = await prisma.user_surveys.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_surveysCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_surveysCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_surveys.
     * @param {user_surveysDeleteArgs} args - Arguments to delete one User_surveys.
     * @example
     * // Delete one User_surveys
     * const User_surveys = await prisma.user_surveys.delete({
     *   where: {
     *     // ... filter to delete one User_surveys
     *   }
     * })
     * 
    **/
    delete<T extends user_surveysDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_surveysDeleteArgs<ExtArgs>>
    ): Prisma__user_surveysClient<$Result.GetResult<Prisma.$user_surveysPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_surveys.
     * @param {user_surveysUpdateArgs} args - Arguments to update one User_surveys.
     * @example
     * // Update one User_surveys
     * const user_surveys = await prisma.user_surveys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_surveysUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_surveysUpdateArgs<ExtArgs>>
    ): Prisma__user_surveysClient<$Result.GetResult<Prisma.$user_surveysPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_surveys.
     * @param {user_surveysDeleteManyArgs} args - Arguments to filter User_surveys to delete.
     * @example
     * // Delete a few User_surveys
     * const { count } = await prisma.user_surveys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_surveysDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_surveysDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_surveysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_surveys
     * const user_surveys = await prisma.user_surveys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_surveysUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_surveysUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_surveys.
     * @param {user_surveysUpsertArgs} args - Arguments to update or create a User_surveys.
     * @example
     * // Update or create a User_surveys
     * const user_surveys = await prisma.user_surveys.upsert({
     *   create: {
     *     // ... data to create a User_surveys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_surveys we want to update
     *   }
     * })
    **/
    upsert<T extends user_surveysUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_surveysUpsertArgs<ExtArgs>>
    ): Prisma__user_surveysClient<$Result.GetResult<Prisma.$user_surveysPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_surveysCountArgs} args - Arguments to filter User_surveys to count.
     * @example
     * // Count the number of User_surveys
     * const count = await prisma.user_surveys.count({
     *   where: {
     *     // ... the filter for the User_surveys we want to count
     *   }
     * })
    **/
    count<T extends user_surveysCountArgs>(
      args?: Subset<T, user_surveysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_surveysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_surveysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_surveysAggregateArgs>(args: Subset<T, User_surveysAggregateArgs>): Prisma.PrismaPromise<GetUser_surveysAggregateType<T>>

    /**
     * Group by User_surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_surveysGroupByArgs} args - Group by arguments.
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
      T extends user_surveysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_surveysGroupByArgs['orderBy'] }
        : { orderBy?: user_surveysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_surveysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_surveysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_surveys model
   */
  readonly fields: user_surveysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_surveys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_surveysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends user_surveys$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_surveys$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user_surveys model
   */ 
  interface user_surveysFieldRefs {
    readonly id: FieldRef<"user_surveys", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * user_surveys findUnique
   */
  export type user_surveysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_surveys
     */
    select?: user_surveysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_surveysInclude<ExtArgs> | null
    /**
     * Filter, which user_surveys to fetch.
     */
    where: user_surveysWhereUniqueInput
  }


  /**
   * user_surveys findUniqueOrThrow
   */
  export type user_surveysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_surveys
     */
    select?: user_surveysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_surveysInclude<ExtArgs> | null
    /**
     * Filter, which user_surveys to fetch.
     */
    where: user_surveysWhereUniqueInput
  }


  /**
   * user_surveys findFirst
   */
  export type user_surveysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_surveys
     */
    select?: user_surveysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_surveysInclude<ExtArgs> | null
    /**
     * Filter, which user_surveys to fetch.
     */
    where?: user_surveysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_surveys to fetch.
     */
    orderBy?: user_surveysOrderByWithRelationInput | user_surveysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_surveys.
     */
    cursor?: user_surveysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_surveys.
     */
    distinct?: User_surveysScalarFieldEnum | User_surveysScalarFieldEnum[]
  }


  /**
   * user_surveys findFirstOrThrow
   */
  export type user_surveysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_surveys
     */
    select?: user_surveysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_surveysInclude<ExtArgs> | null
    /**
     * Filter, which user_surveys to fetch.
     */
    where?: user_surveysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_surveys to fetch.
     */
    orderBy?: user_surveysOrderByWithRelationInput | user_surveysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_surveys.
     */
    cursor?: user_surveysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_surveys.
     */
    distinct?: User_surveysScalarFieldEnum | User_surveysScalarFieldEnum[]
  }


  /**
   * user_surveys findMany
   */
  export type user_surveysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_surveys
     */
    select?: user_surveysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_surveysInclude<ExtArgs> | null
    /**
     * Filter, which user_surveys to fetch.
     */
    where?: user_surveysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_surveys to fetch.
     */
    orderBy?: user_surveysOrderByWithRelationInput | user_surveysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_surveys.
     */
    cursor?: user_surveysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_surveys.
     */
    skip?: number
    distinct?: User_surveysScalarFieldEnum | User_surveysScalarFieldEnum[]
  }


  /**
   * user_surveys create
   */
  export type user_surveysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_surveys
     */
    select?: user_surveysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_surveysInclude<ExtArgs> | null
    /**
     * The data needed to create a user_surveys.
     */
    data?: XOR<user_surveysCreateInput, user_surveysUncheckedCreateInput>
  }


  /**
   * user_surveys createMany
   */
  export type user_surveysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_surveys.
     */
    data: user_surveysCreateManyInput | user_surveysCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user_surveys update
   */
  export type user_surveysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_surveys
     */
    select?: user_surveysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_surveysInclude<ExtArgs> | null
    /**
     * The data needed to update a user_surveys.
     */
    data: XOR<user_surveysUpdateInput, user_surveysUncheckedUpdateInput>
    /**
     * Choose, which user_surveys to update.
     */
    where: user_surveysWhereUniqueInput
  }


  /**
   * user_surveys updateMany
   */
  export type user_surveysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_surveys.
     */
    data: XOR<user_surveysUpdateManyMutationInput, user_surveysUncheckedUpdateManyInput>
    /**
     * Filter which user_surveys to update
     */
    where?: user_surveysWhereInput
  }


  /**
   * user_surveys upsert
   */
  export type user_surveysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_surveys
     */
    select?: user_surveysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_surveysInclude<ExtArgs> | null
    /**
     * The filter to search for the user_surveys to update in case it exists.
     */
    where: user_surveysWhereUniqueInput
    /**
     * In case the user_surveys found by the `where` argument doesn't exist, create a new user_surveys with this data.
     */
    create: XOR<user_surveysCreateInput, user_surveysUncheckedCreateInput>
    /**
     * In case the user_surveys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_surveysUpdateInput, user_surveysUncheckedUpdateInput>
  }


  /**
   * user_surveys delete
   */
  export type user_surveysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_surveys
     */
    select?: user_surveysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_surveysInclude<ExtArgs> | null
    /**
     * Filter which user_surveys to delete.
     */
    where: user_surveysWhereUniqueInput
  }


  /**
   * user_surveys deleteMany
   */
  export type user_surveysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_surveys to delete
     */
    where?: user_surveysWhereInput
  }


  /**
   * user_surveys.users
   */
  export type user_surveys$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * user_surveys without action
   */
  export type user_surveysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_surveys
     */
    select?: user_surveysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_surveysInclude<ExtArgs> | null
  }



  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    organization_id: number | null
    role_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    organization_id: number | null
    role_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    enabled: boolean | null
    first_name: string | null
    last_name: string | null
    otp_token: string | null
    password: string | null
    password_reset_token: string | null
    phone_number: string | null
    username: string | null
    organization_id: number | null
    role_id: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    enabled: boolean | null
    first_name: string | null
    last_name: string | null
    otp_token: string | null
    password: string | null
    password_reset_token: string | null
    phone_number: string | null
    username: string | null
    organization_id: number | null
    role_id: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    enabled: number
    first_name: number
    last_name: number
    otp_token: number
    password: number
    password_reset_token: number
    phone_number: number
    username: number
    organization_id: number
    role_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    organization_id?: true
    role_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    organization_id?: true
    role_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    enabled?: true
    first_name?: true
    last_name?: true
    otp_token?: true
    password?: true
    password_reset_token?: true
    phone_number?: true
    username?: true
    organization_id?: true
    role_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    enabled?: true
    first_name?: true
    last_name?: true
    otp_token?: true
    password?: true
    password_reset_token?: true
    phone_number?: true
    username?: true
    organization_id?: true
    role_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    enabled?: true
    first_name?: true
    last_name?: true
    otp_token?: true
    password?: true
    password_reset_token?: true
    phone_number?: true
    username?: true
    organization_id?: true
    role_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string | null
    enabled: boolean
    first_name: string | null
    last_name: string | null
    otp_token: string | null
    password: string | null
    password_reset_token: string | null
    phone_number: string | null
    username: string
    organization_id: number
    role_id: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    enabled?: boolean
    first_name?: boolean
    last_name?: boolean
    otp_token?: boolean
    password?: boolean
    password_reset_token?: boolean
    phone_number?: boolean
    username?: boolean
    organization_id?: boolean
    role_id?: boolean
    organization?: boolean | organizationDefaultArgs<ExtArgs>
    roles?: boolean | users$rolesArgs<ExtArgs>
    organization_group_users?: boolean | users$organization_group_usersArgs<ExtArgs>
    survey?: boolean | users$surveyArgs<ExtArgs>
    user_surveys?: boolean | users$user_surveysArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    enabled?: boolean
    first_name?: boolean
    last_name?: boolean
    otp_token?: boolean
    password?: boolean
    password_reset_token?: boolean
    phone_number?: boolean
    username?: boolean
    organization_id?: boolean
    role_id?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>
    roles?: boolean | users$rolesArgs<ExtArgs>
    organization_group_users?: boolean | users$organization_group_usersArgs<ExtArgs>
    survey?: boolean | users$surveyArgs<ExtArgs>
    user_surveys?: boolean | users$user_surveysArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>
      roles: Prisma.$rolesPayload<ExtArgs> | null
      organization_group_users: Prisma.$organization_group_usersPayload<ExtArgs>[]
      survey: Prisma.$surveyPayload<ExtArgs>[]
      user_surveys: Prisma.$user_surveysPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      enabled: boolean
      first_name: string | null
      last_name: string | null
      otp_token: string | null
      password: string | null
      password_reset_token: string | null
      phone_number: string | null
      username: string
      organization_id: number
      role_id: number | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizationDefaultArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    roles<T extends users$rolesArgs<ExtArgs> = {}>(args?: Subset<T, users$rolesArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    organization_group_users<T extends users$organization_group_usersArgs<ExtArgs> = {}>(args?: Subset<T, users$organization_group_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organization_group_usersPayload<ExtArgs>, T, 'findMany'> | Null>;

    survey<T extends users$surveyArgs<ExtArgs> = {}>(args?: Subset<T, users$surveyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$surveyPayload<ExtArgs>, T, 'findMany'> | Null>;

    user_surveys<T extends users$user_surveysArgs<ExtArgs> = {}>(args?: Subset<T, users$user_surveysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_surveysPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly enabled: FieldRef<"users", 'Boolean'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly otp_token: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly password_reset_token: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly organization_id: FieldRef<"users", 'Int'>
    readonly role_id: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.roles
   */
  export type users$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    where?: rolesWhereInput
  }


  /**
   * users.organization_group_users
   */
  export type users$organization_group_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization_group_users
     */
    select?: organization_group_usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organization_group_usersInclude<ExtArgs> | null
    where?: organization_group_usersWhereInput
    orderBy?: organization_group_usersOrderByWithRelationInput | organization_group_usersOrderByWithRelationInput[]
    cursor?: organization_group_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Organization_group_usersScalarFieldEnum | Organization_group_usersScalarFieldEnum[]
  }


  /**
   * users.survey
   */
  export type users$surveyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survey
     */
    select?: surveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: surveyInclude<ExtArgs> | null
    where?: surveyWhereInput
    orderBy?: surveyOrderByWithRelationInput | surveyOrderByWithRelationInput[]
    cursor?: surveyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }


  /**
   * users.user_surveys
   */
  export type users$user_surveysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_surveys
     */
    select?: user_surveysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_surveysInclude<ExtArgs> | null
    where?: user_surveysWhereInput
    orderBy?: user_surveysOrderByWithRelationInput | user_surveysOrderByWithRelationInput[]
    cursor?: user_surveysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_surveysScalarFieldEnum | User_surveysScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
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


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const Organization_group_usersScalarFieldEnum: {
    id: 'id'
  };

  export type Organization_group_usersScalarFieldEnum = (typeof Organization_group_usersScalarFieldEnum)[keyof typeof Organization_group_usersScalarFieldEnum]


  export const SurveyScalarFieldEnum: {
    id: 'id'
  };

  export type SurveyScalarFieldEnum = (typeof SurveyScalarFieldEnum)[keyof typeof SurveyScalarFieldEnum]


  export const User_surveysScalarFieldEnum: {
    id: 'id'
  };

  export type User_surveysScalarFieldEnum = (typeof User_surveysScalarFieldEnum)[keyof typeof User_surveysScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    enabled: 'enabled',
    first_name: 'first_name',
    last_name: 'last_name',
    otp_token: 'otp_token',
    password: 'password',
    password_reset_token: 'password_reset_token',
    phone_number: 'phone_number',
    username: 'username',
    organization_id: 'organization_id',
    role_id: 'role_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[]
    OR?: organizationWhereInput[]
    NOT?: organizationWhereInput | organizationWhereInput[]
    id?: IntFilter<"organization"> | number
    name?: StringFilter<"organization"> | string
    users?: UsersListRelationFilter
  }

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type organizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: organizationWhereInput | organizationWhereInput[]
    OR?: organizationWhereInput[]
    NOT?: organizationWhereInput | organizationWhereInput[]
    name?: StringFilter<"organization"> | string
    users?: UsersListRelationFilter
  }, "id">

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: organizationCountOrderByAggregateInput
    _avg?: organizationAvgOrderByAggregateInput
    _max?: organizationMaxOrderByAggregateInput
    _min?: organizationMinOrderByAggregateInput
    _sum?: organizationSumOrderByAggregateInput
  }

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[]
    OR?: organizationScalarWhereWithAggregatesInput[]
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"organization"> | number
    name?: StringWithAggregatesFilter<"organization"> | string
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: IntFilter<"roles"> | number
    name?: StringFilter<"roles"> | string
    users?: UsersListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    name?: StringFilter<"roles"> | string
    users?: UsersListRelationFilter
  }, "id">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roles"> | number
    name?: StringWithAggregatesFilter<"roles"> | string
  }

  export type organization_group_usersWhereInput = {
    AND?: organization_group_usersWhereInput | organization_group_usersWhereInput[]
    OR?: organization_group_usersWhereInput[]
    NOT?: organization_group_usersWhereInput | organization_group_usersWhereInput[]
    id?: IntFilter<"organization_group_users"> | number
    users?: UsersListRelationFilter
  }

  export type organization_group_usersOrderByWithRelationInput = {
    id?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type organization_group_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: organization_group_usersWhereInput | organization_group_usersWhereInput[]
    OR?: organization_group_usersWhereInput[]
    NOT?: organization_group_usersWhereInput | organization_group_usersWhereInput[]
    users?: UsersListRelationFilter
  }, "id">

  export type organization_group_usersOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: organization_group_usersCountOrderByAggregateInput
    _avg?: organization_group_usersAvgOrderByAggregateInput
    _max?: organization_group_usersMaxOrderByAggregateInput
    _min?: organization_group_usersMinOrderByAggregateInput
    _sum?: organization_group_usersSumOrderByAggregateInput
  }

  export type organization_group_usersScalarWhereWithAggregatesInput = {
    AND?: organization_group_usersScalarWhereWithAggregatesInput | organization_group_usersScalarWhereWithAggregatesInput[]
    OR?: organization_group_usersScalarWhereWithAggregatesInput[]
    NOT?: organization_group_usersScalarWhereWithAggregatesInput | organization_group_usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"organization_group_users"> | number
  }

  export type surveyWhereInput = {
    AND?: surveyWhereInput | surveyWhereInput[]
    OR?: surveyWhereInput[]
    NOT?: surveyWhereInput | surveyWhereInput[]
    id?: IntFilter<"survey"> | number
    users?: UsersListRelationFilter
  }

  export type surveyOrderByWithRelationInput = {
    id?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type surveyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: surveyWhereInput | surveyWhereInput[]
    OR?: surveyWhereInput[]
    NOT?: surveyWhereInput | surveyWhereInput[]
    users?: UsersListRelationFilter
  }, "id">

  export type surveyOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: surveyCountOrderByAggregateInput
    _avg?: surveyAvgOrderByAggregateInput
    _max?: surveyMaxOrderByAggregateInput
    _min?: surveyMinOrderByAggregateInput
    _sum?: surveySumOrderByAggregateInput
  }

  export type surveyScalarWhereWithAggregatesInput = {
    AND?: surveyScalarWhereWithAggregatesInput | surveyScalarWhereWithAggregatesInput[]
    OR?: surveyScalarWhereWithAggregatesInput[]
    NOT?: surveyScalarWhereWithAggregatesInput | surveyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"survey"> | number
  }

  export type user_surveysWhereInput = {
    AND?: user_surveysWhereInput | user_surveysWhereInput[]
    OR?: user_surveysWhereInput[]
    NOT?: user_surveysWhereInput | user_surveysWhereInput[]
    id?: IntFilter<"user_surveys"> | number
    users?: UsersListRelationFilter
  }

  export type user_surveysOrderByWithRelationInput = {
    id?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type user_surveysWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_surveysWhereInput | user_surveysWhereInput[]
    OR?: user_surveysWhereInput[]
    NOT?: user_surveysWhereInput | user_surveysWhereInput[]
    users?: UsersListRelationFilter
  }, "id">

  export type user_surveysOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: user_surveysCountOrderByAggregateInput
    _avg?: user_surveysAvgOrderByAggregateInput
    _max?: user_surveysMaxOrderByAggregateInput
    _min?: user_surveysMinOrderByAggregateInput
    _sum?: user_surveysSumOrderByAggregateInput
  }

  export type user_surveysScalarWhereWithAggregatesInput = {
    AND?: user_surveysScalarWhereWithAggregatesInput | user_surveysScalarWhereWithAggregatesInput[]
    OR?: user_surveysScalarWhereWithAggregatesInput[]
    NOT?: user_surveysScalarWhereWithAggregatesInput | user_surveysScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_surveys"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringNullableFilter<"users"> | string | null
    enabled?: BoolFilter<"users"> | boolean
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    otp_token?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    password_reset_token?: StringNullableFilter<"users"> | string | null
    phone_number?: StringNullableFilter<"users"> | string | null
    username?: StringFilter<"users"> | string
    organization_id?: IntFilter<"users"> | number
    role_id?: IntNullableFilter<"users"> | number | null
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>
    roles?: XOR<RolesNullableRelationFilter, rolesWhereInput> | null
    organization_group_users?: Organization_group_usersListRelationFilter
    survey?: SurveyListRelationFilter
    user_surveys?: User_surveysListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    enabled?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    otp_token?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    password_reset_token?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    username?: SortOrder
    organization_id?: SortOrder
    role_id?: SortOrderInput | SortOrder
    organization?: organizationOrderByWithRelationInput
    roles?: rolesOrderByWithRelationInput
    organization_group_users?: organization_group_usersOrderByRelationAggregateInput
    survey?: surveyOrderByRelationAggregateInput
    user_surveys?: user_surveysOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    email?: StringNullableFilter<"users"> | string | null
    enabled?: BoolFilter<"users"> | boolean
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    otp_token?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    password_reset_token?: StringNullableFilter<"users"> | string | null
    phone_number?: StringNullableFilter<"users"> | string | null
    organization_id?: IntFilter<"users"> | number
    role_id?: IntNullableFilter<"users"> | number | null
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>
    roles?: XOR<RolesNullableRelationFilter, rolesWhereInput> | null
    organization_group_users?: Organization_group_usersListRelationFilter
    survey?: SurveyListRelationFilter
    user_surveys?: User_surveysListRelationFilter
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    enabled?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    otp_token?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    password_reset_token?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    username?: SortOrder
    organization_id?: SortOrder
    role_id?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    enabled?: BoolWithAggregatesFilter<"users"> | boolean
    first_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    otp_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    password_reset_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"users"> | string | null
    username?: StringWithAggregatesFilter<"users"> | string
    organization_id?: IntWithAggregatesFilter<"users"> | number
    role_id?: IntNullableWithAggregatesFilter<"users"> | number | null
  }

  export type organizationCreateInput = {
    name: string
    users?: usersCreateNestedManyWithoutOrganizationInput
  }

  export type organizationUncheckedCreateInput = {
    id?: number
    name: string
    users?: usersUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationCreateManyInput = {
    id?: number
    name: string
  }

  export type organizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type organizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type rolesCreateInput = {
    name: string
    users?: usersCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id?: number
    name: string
    users?: usersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id?: number
    name: string
  }

  export type rolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type organization_group_usersCreateInput = {
    users?: usersCreateNestedManyWithoutOrganization_group_usersInput
  }

  export type organization_group_usersUncheckedCreateInput = {
    id?: number
    users?: usersUncheckedCreateNestedManyWithoutOrganization_group_usersInput
  }

  export type organization_group_usersUpdateInput = {
    users?: usersUpdateManyWithoutOrganization_group_usersNestedInput
  }

  export type organization_group_usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    users?: usersUncheckedUpdateManyWithoutOrganization_group_usersNestedInput
  }

  export type organization_group_usersCreateManyInput = {
    id?: number
  }

  export type organization_group_usersUpdateManyMutationInput = {

  }

  export type organization_group_usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type surveyCreateInput = {
    users?: usersCreateNestedManyWithoutSurveyInput
  }

  export type surveyUncheckedCreateInput = {
    id?: number
    users?: usersUncheckedCreateNestedManyWithoutSurveyInput
  }

  export type surveyUpdateInput = {
    users?: usersUpdateManyWithoutSurveyNestedInput
  }

  export type surveyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    users?: usersUncheckedUpdateManyWithoutSurveyNestedInput
  }

  export type surveyCreateManyInput = {
    id?: number
  }

  export type surveyUpdateManyMutationInput = {

  }

  export type surveyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type user_surveysCreateInput = {
    users?: usersCreateNestedManyWithoutUser_surveysInput
  }

  export type user_surveysUncheckedCreateInput = {
    id?: number
    users?: usersUncheckedCreateNestedManyWithoutUser_surveysInput
  }

  export type user_surveysUpdateInput = {
    users?: usersUpdateManyWithoutUser_surveysNestedInput
  }

  export type user_surveysUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    users?: usersUncheckedUpdateManyWithoutUser_surveysNestedInput
  }

  export type user_surveysCreateManyInput = {
    id?: number
  }

  export type user_surveysUpdateManyMutationInput = {

  }

  export type user_surveysUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    organization: organizationCreateNestedOneWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
    organization_group_users?: organization_group_usersCreateNestedManyWithoutUsersInput
    survey?: surveyCreateNestedManyWithoutUsersInput
    user_surveys?: user_surveysCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    organization_id: number
    role_id?: number | null
    organization_group_users?: organization_group_usersUncheckedCreateNestedManyWithoutUsersInput
    survey?: surveyUncheckedCreateNestedManyWithoutUsersInput
    user_surveys?: user_surveysUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization?: organizationUpdateOneRequiredWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
    organization_group_users?: organization_group_usersUpdateManyWithoutUsersNestedInput
    survey?: surveyUpdateManyWithoutUsersNestedInput
    user_surveys?: user_surveysUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    organization_group_users?: organization_group_usersUncheckedUpdateManyWithoutUsersNestedInput
    survey?: surveyUncheckedUpdateManyWithoutUsersNestedInput
    user_surveys?: user_surveysUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    organization_id: number
    role_id?: number | null
  }

  export type usersUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type organizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type organizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organization_group_usersCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organization_group_usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organization_group_usersMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organization_group_usersMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organization_group_usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type surveyCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type surveyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type surveyMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type surveyMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type surveySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type user_surveysCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type user_surveysAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type user_surveysMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type user_surveysMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type user_surveysSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput
    isNot?: organizationWhereInput
  }

  export type RolesNullableRelationFilter = {
    is?: rolesWhereInput | null
    isNot?: rolesWhereInput | null
  }

  export type Organization_group_usersListRelationFilter = {
    every?: organization_group_usersWhereInput
    some?: organization_group_usersWhereInput
    none?: organization_group_usersWhereInput
  }

  export type SurveyListRelationFilter = {
    every?: surveyWhereInput
    some?: surveyWhereInput
    none?: surveyWhereInput
  }

  export type User_surveysListRelationFilter = {
    every?: user_surveysWhereInput
    some?: user_surveysWhereInput
    none?: user_surveysWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type organization_group_usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type surveyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_surveysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    enabled?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    otp_token?: SortOrder
    password?: SortOrder
    password_reset_token?: SortOrder
    phone_number?: SortOrder
    username?: SortOrder
    organization_id?: SortOrder
    role_id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    role_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    enabled?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    otp_token?: SortOrder
    password?: SortOrder
    password_reset_token?: SortOrder
    phone_number?: SortOrder
    username?: SortOrder
    organization_id?: SortOrder
    role_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    enabled?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    otp_token?: SortOrder
    password?: SortOrder
    password_reset_token?: SortOrder
    phone_number?: SortOrder
    username?: SortOrder
    organization_id?: SortOrder
    role_id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    role_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type usersCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<usersCreateWithoutOrganizationInput, usersUncheckedCreateWithoutOrganizationInput> | usersCreateWithoutOrganizationInput[] | usersUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: usersCreateOrConnectWithoutOrganizationInput | usersCreateOrConnectWithoutOrganizationInput[]
    createMany?: usersCreateManyOrganizationInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<usersCreateWithoutOrganizationInput, usersUncheckedCreateWithoutOrganizationInput> | usersCreateWithoutOrganizationInput[] | usersUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: usersCreateOrConnectWithoutOrganizationInput | usersCreateOrConnectWithoutOrganizationInput[]
    createMany?: usersCreateManyOrganizationInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usersUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<usersCreateWithoutOrganizationInput, usersUncheckedCreateWithoutOrganizationInput> | usersCreateWithoutOrganizationInput[] | usersUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: usersCreateOrConnectWithoutOrganizationInput | usersCreateOrConnectWithoutOrganizationInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutOrganizationInput | usersUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: usersCreateManyOrganizationInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutOrganizationInput | usersUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: usersUpdateManyWithWhereWithoutOrganizationInput | usersUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<usersCreateWithoutOrganizationInput, usersUncheckedCreateWithoutOrganizationInput> | usersCreateWithoutOrganizationInput[] | usersUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: usersCreateOrConnectWithoutOrganizationInput | usersCreateOrConnectWithoutOrganizationInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutOrganizationInput | usersUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: usersCreateManyOrganizationInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutOrganizationInput | usersUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: usersUpdateManyWithWhereWithoutOrganizationInput | usersUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutOrganization_group_usersInput = {
    create?: XOR<usersCreateWithoutOrganization_group_usersInput, usersUncheckedCreateWithoutOrganization_group_usersInput> | usersCreateWithoutOrganization_group_usersInput[] | usersUncheckedCreateWithoutOrganization_group_usersInput[]
    connectOrCreate?: usersCreateOrConnectWithoutOrganization_group_usersInput | usersCreateOrConnectWithoutOrganization_group_usersInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutOrganization_group_usersInput = {
    create?: XOR<usersCreateWithoutOrganization_group_usersInput, usersUncheckedCreateWithoutOrganization_group_usersInput> | usersCreateWithoutOrganization_group_usersInput[] | usersUncheckedCreateWithoutOrganization_group_usersInput[]
    connectOrCreate?: usersCreateOrConnectWithoutOrganization_group_usersInput | usersCreateOrConnectWithoutOrganization_group_usersInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutOrganization_group_usersNestedInput = {
    create?: XOR<usersCreateWithoutOrganization_group_usersInput, usersUncheckedCreateWithoutOrganization_group_usersInput> | usersCreateWithoutOrganization_group_usersInput[] | usersUncheckedCreateWithoutOrganization_group_usersInput[]
    connectOrCreate?: usersCreateOrConnectWithoutOrganization_group_usersInput | usersCreateOrConnectWithoutOrganization_group_usersInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutOrganization_group_usersInput | usersUpsertWithWhereUniqueWithoutOrganization_group_usersInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutOrganization_group_usersInput | usersUpdateWithWhereUniqueWithoutOrganization_group_usersInput[]
    updateMany?: usersUpdateManyWithWhereWithoutOrganization_group_usersInput | usersUpdateManyWithWhereWithoutOrganization_group_usersInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutOrganization_group_usersNestedInput = {
    create?: XOR<usersCreateWithoutOrganization_group_usersInput, usersUncheckedCreateWithoutOrganization_group_usersInput> | usersCreateWithoutOrganization_group_usersInput[] | usersUncheckedCreateWithoutOrganization_group_usersInput[]
    connectOrCreate?: usersCreateOrConnectWithoutOrganization_group_usersInput | usersCreateOrConnectWithoutOrganization_group_usersInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutOrganization_group_usersInput | usersUpsertWithWhereUniqueWithoutOrganization_group_usersInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutOrganization_group_usersInput | usersUpdateWithWhereUniqueWithoutOrganization_group_usersInput[]
    updateMany?: usersUpdateManyWithWhereWithoutOrganization_group_usersInput | usersUpdateManyWithWhereWithoutOrganization_group_usersInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutSurveyInput = {
    create?: XOR<usersCreateWithoutSurveyInput, usersUncheckedCreateWithoutSurveyInput> | usersCreateWithoutSurveyInput[] | usersUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSurveyInput | usersCreateOrConnectWithoutSurveyInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutSurveyInput = {
    create?: XOR<usersCreateWithoutSurveyInput, usersUncheckedCreateWithoutSurveyInput> | usersCreateWithoutSurveyInput[] | usersUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSurveyInput | usersCreateOrConnectWithoutSurveyInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<usersCreateWithoutSurveyInput, usersUncheckedCreateWithoutSurveyInput> | usersCreateWithoutSurveyInput[] | usersUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSurveyInput | usersCreateOrConnectWithoutSurveyInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutSurveyInput | usersUpsertWithWhereUniqueWithoutSurveyInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutSurveyInput | usersUpdateWithWhereUniqueWithoutSurveyInput[]
    updateMany?: usersUpdateManyWithWhereWithoutSurveyInput | usersUpdateManyWithWhereWithoutSurveyInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<usersCreateWithoutSurveyInput, usersUncheckedCreateWithoutSurveyInput> | usersCreateWithoutSurveyInput[] | usersUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSurveyInput | usersCreateOrConnectWithoutSurveyInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutSurveyInput | usersUpsertWithWhereUniqueWithoutSurveyInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutSurveyInput | usersUpdateWithWhereUniqueWithoutSurveyInput[]
    updateMany?: usersUpdateManyWithWhereWithoutSurveyInput | usersUpdateManyWithWhereWithoutSurveyInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutUser_surveysInput = {
    create?: XOR<usersCreateWithoutUser_surveysInput, usersUncheckedCreateWithoutUser_surveysInput> | usersCreateWithoutUser_surveysInput[] | usersUncheckedCreateWithoutUser_surveysInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUser_surveysInput | usersCreateOrConnectWithoutUser_surveysInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutUser_surveysInput = {
    create?: XOR<usersCreateWithoutUser_surveysInput, usersUncheckedCreateWithoutUser_surveysInput> | usersCreateWithoutUser_surveysInput[] | usersUncheckedCreateWithoutUser_surveysInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUser_surveysInput | usersCreateOrConnectWithoutUser_surveysInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutUser_surveysNestedInput = {
    create?: XOR<usersCreateWithoutUser_surveysInput, usersUncheckedCreateWithoutUser_surveysInput> | usersCreateWithoutUser_surveysInput[] | usersUncheckedCreateWithoutUser_surveysInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUser_surveysInput | usersCreateOrConnectWithoutUser_surveysInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutUser_surveysInput | usersUpsertWithWhereUniqueWithoutUser_surveysInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutUser_surveysInput | usersUpdateWithWhereUniqueWithoutUser_surveysInput[]
    updateMany?: usersUpdateManyWithWhereWithoutUser_surveysInput | usersUpdateManyWithWhereWithoutUser_surveysInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutUser_surveysNestedInput = {
    create?: XOR<usersCreateWithoutUser_surveysInput, usersUncheckedCreateWithoutUser_surveysInput> | usersCreateWithoutUser_surveysInput[] | usersUncheckedCreateWithoutUser_surveysInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUser_surveysInput | usersCreateOrConnectWithoutUser_surveysInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutUser_surveysInput | usersUpsertWithWhereUniqueWithoutUser_surveysInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutUser_surveysInput | usersUpdateWithWhereUniqueWithoutUser_surveysInput[]
    updateMany?: usersUpdateManyWithWhereWithoutUser_surveysInput | usersUpdateManyWithWhereWithoutUser_surveysInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type organizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<organizationCreateWithoutUsersInput, organizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: organizationCreateOrConnectWithoutUsersInput
    connect?: organizationWhereUniqueInput
  }

  export type rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    connect?: rolesWhereUniqueInput
  }

  export type organization_group_usersCreateNestedManyWithoutUsersInput = {
    create?: XOR<organization_group_usersCreateWithoutUsersInput, organization_group_usersUncheckedCreateWithoutUsersInput> | organization_group_usersCreateWithoutUsersInput[] | organization_group_usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: organization_group_usersCreateOrConnectWithoutUsersInput | organization_group_usersCreateOrConnectWithoutUsersInput[]
    connect?: organization_group_usersWhereUniqueInput | organization_group_usersWhereUniqueInput[]
  }

  export type surveyCreateNestedManyWithoutUsersInput = {
    create?: XOR<surveyCreateWithoutUsersInput, surveyUncheckedCreateWithoutUsersInput> | surveyCreateWithoutUsersInput[] | surveyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: surveyCreateOrConnectWithoutUsersInput | surveyCreateOrConnectWithoutUsersInput[]
    connect?: surveyWhereUniqueInput | surveyWhereUniqueInput[]
  }

  export type user_surveysCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_surveysCreateWithoutUsersInput, user_surveysUncheckedCreateWithoutUsersInput> | user_surveysCreateWithoutUsersInput[] | user_surveysUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_surveysCreateOrConnectWithoutUsersInput | user_surveysCreateOrConnectWithoutUsersInput[]
    connect?: user_surveysWhereUniqueInput | user_surveysWhereUniqueInput[]
  }

  export type organization_group_usersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<organization_group_usersCreateWithoutUsersInput, organization_group_usersUncheckedCreateWithoutUsersInput> | organization_group_usersCreateWithoutUsersInput[] | organization_group_usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: organization_group_usersCreateOrConnectWithoutUsersInput | organization_group_usersCreateOrConnectWithoutUsersInput[]
    connect?: organization_group_usersWhereUniqueInput | organization_group_usersWhereUniqueInput[]
  }

  export type surveyUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<surveyCreateWithoutUsersInput, surveyUncheckedCreateWithoutUsersInput> | surveyCreateWithoutUsersInput[] | surveyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: surveyCreateOrConnectWithoutUsersInput | surveyCreateOrConnectWithoutUsersInput[]
    connect?: surveyWhereUniqueInput | surveyWhereUniqueInput[]
  }

  export type user_surveysUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_surveysCreateWithoutUsersInput, user_surveysUncheckedCreateWithoutUsersInput> | user_surveysCreateWithoutUsersInput[] | user_surveysUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_surveysCreateOrConnectWithoutUsersInput | user_surveysCreateOrConnectWithoutUsersInput[]
    connect?: user_surveysWhereUniqueInput | user_surveysWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type organizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<organizationCreateWithoutUsersInput, organizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: organizationCreateOrConnectWithoutUsersInput
    upsert?: organizationUpsertWithoutUsersInput
    connect?: organizationWhereUniqueInput
    update?: XOR<XOR<organizationUpdateToOneWithWhereWithoutUsersInput, organizationUpdateWithoutUsersInput>, organizationUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    upsert?: rolesUpsertWithoutUsersInput
    disconnect?: rolesWhereInput | boolean
    delete?: rolesWhereInput | boolean
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUsersInput, rolesUpdateWithoutUsersInput>, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type organization_group_usersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<organization_group_usersCreateWithoutUsersInput, organization_group_usersUncheckedCreateWithoutUsersInput> | organization_group_usersCreateWithoutUsersInput[] | organization_group_usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: organization_group_usersCreateOrConnectWithoutUsersInput | organization_group_usersCreateOrConnectWithoutUsersInput[]
    upsert?: organization_group_usersUpsertWithWhereUniqueWithoutUsersInput | organization_group_usersUpsertWithWhereUniqueWithoutUsersInput[]
    set?: organization_group_usersWhereUniqueInput | organization_group_usersWhereUniqueInput[]
    disconnect?: organization_group_usersWhereUniqueInput | organization_group_usersWhereUniqueInput[]
    delete?: organization_group_usersWhereUniqueInput | organization_group_usersWhereUniqueInput[]
    connect?: organization_group_usersWhereUniqueInput | organization_group_usersWhereUniqueInput[]
    update?: organization_group_usersUpdateWithWhereUniqueWithoutUsersInput | organization_group_usersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: organization_group_usersUpdateManyWithWhereWithoutUsersInput | organization_group_usersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: organization_group_usersScalarWhereInput | organization_group_usersScalarWhereInput[]
  }

  export type surveyUpdateManyWithoutUsersNestedInput = {
    create?: XOR<surveyCreateWithoutUsersInput, surveyUncheckedCreateWithoutUsersInput> | surveyCreateWithoutUsersInput[] | surveyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: surveyCreateOrConnectWithoutUsersInput | surveyCreateOrConnectWithoutUsersInput[]
    upsert?: surveyUpsertWithWhereUniqueWithoutUsersInput | surveyUpsertWithWhereUniqueWithoutUsersInput[]
    set?: surveyWhereUniqueInput | surveyWhereUniqueInput[]
    disconnect?: surveyWhereUniqueInput | surveyWhereUniqueInput[]
    delete?: surveyWhereUniqueInput | surveyWhereUniqueInput[]
    connect?: surveyWhereUniqueInput | surveyWhereUniqueInput[]
    update?: surveyUpdateWithWhereUniqueWithoutUsersInput | surveyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: surveyUpdateManyWithWhereWithoutUsersInput | surveyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: surveyScalarWhereInput | surveyScalarWhereInput[]
  }

  export type user_surveysUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_surveysCreateWithoutUsersInput, user_surveysUncheckedCreateWithoutUsersInput> | user_surveysCreateWithoutUsersInput[] | user_surveysUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_surveysCreateOrConnectWithoutUsersInput | user_surveysCreateOrConnectWithoutUsersInput[]
    upsert?: user_surveysUpsertWithWhereUniqueWithoutUsersInput | user_surveysUpsertWithWhereUniqueWithoutUsersInput[]
    set?: user_surveysWhereUniqueInput | user_surveysWhereUniqueInput[]
    disconnect?: user_surveysWhereUniqueInput | user_surveysWhereUniqueInput[]
    delete?: user_surveysWhereUniqueInput | user_surveysWhereUniqueInput[]
    connect?: user_surveysWhereUniqueInput | user_surveysWhereUniqueInput[]
    update?: user_surveysUpdateWithWhereUniqueWithoutUsersInput | user_surveysUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_surveysUpdateManyWithWhereWithoutUsersInput | user_surveysUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_surveysScalarWhereInput | user_surveysScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type organization_group_usersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<organization_group_usersCreateWithoutUsersInput, organization_group_usersUncheckedCreateWithoutUsersInput> | organization_group_usersCreateWithoutUsersInput[] | organization_group_usersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: organization_group_usersCreateOrConnectWithoutUsersInput | organization_group_usersCreateOrConnectWithoutUsersInput[]
    upsert?: organization_group_usersUpsertWithWhereUniqueWithoutUsersInput | organization_group_usersUpsertWithWhereUniqueWithoutUsersInput[]
    set?: organization_group_usersWhereUniqueInput | organization_group_usersWhereUniqueInput[]
    disconnect?: organization_group_usersWhereUniqueInput | organization_group_usersWhereUniqueInput[]
    delete?: organization_group_usersWhereUniqueInput | organization_group_usersWhereUniqueInput[]
    connect?: organization_group_usersWhereUniqueInput | organization_group_usersWhereUniqueInput[]
    update?: organization_group_usersUpdateWithWhereUniqueWithoutUsersInput | organization_group_usersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: organization_group_usersUpdateManyWithWhereWithoutUsersInput | organization_group_usersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: organization_group_usersScalarWhereInput | organization_group_usersScalarWhereInput[]
  }

  export type surveyUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<surveyCreateWithoutUsersInput, surveyUncheckedCreateWithoutUsersInput> | surveyCreateWithoutUsersInput[] | surveyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: surveyCreateOrConnectWithoutUsersInput | surveyCreateOrConnectWithoutUsersInput[]
    upsert?: surveyUpsertWithWhereUniqueWithoutUsersInput | surveyUpsertWithWhereUniqueWithoutUsersInput[]
    set?: surveyWhereUniqueInput | surveyWhereUniqueInput[]
    disconnect?: surveyWhereUniqueInput | surveyWhereUniqueInput[]
    delete?: surveyWhereUniqueInput | surveyWhereUniqueInput[]
    connect?: surveyWhereUniqueInput | surveyWhereUniqueInput[]
    update?: surveyUpdateWithWhereUniqueWithoutUsersInput | surveyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: surveyUpdateManyWithWhereWithoutUsersInput | surveyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: surveyScalarWhereInput | surveyScalarWhereInput[]
  }

  export type user_surveysUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_surveysCreateWithoutUsersInput, user_surveysUncheckedCreateWithoutUsersInput> | user_surveysCreateWithoutUsersInput[] | user_surveysUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_surveysCreateOrConnectWithoutUsersInput | user_surveysCreateOrConnectWithoutUsersInput[]
    upsert?: user_surveysUpsertWithWhereUniqueWithoutUsersInput | user_surveysUpsertWithWhereUniqueWithoutUsersInput[]
    set?: user_surveysWhereUniqueInput | user_surveysWhereUniqueInput[]
    disconnect?: user_surveysWhereUniqueInput | user_surveysWhereUniqueInput[]
    delete?: user_surveysWhereUniqueInput | user_surveysWhereUniqueInput[]
    connect?: user_surveysWhereUniqueInput | user_surveysWhereUniqueInput[]
    update?: user_surveysUpdateWithWhereUniqueWithoutUsersInput | user_surveysUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_surveysUpdateManyWithWhereWithoutUsersInput | user_surveysUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_surveysScalarWhereInput | user_surveysScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type usersCreateWithoutOrganizationInput = {
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    roles?: rolesCreateNestedOneWithoutUsersInput
    organization_group_users?: organization_group_usersCreateNestedManyWithoutUsersInput
    survey?: surveyCreateNestedManyWithoutUsersInput
    user_surveys?: user_surveysCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrganizationInput = {
    id?: number
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    role_id?: number | null
    organization_group_users?: organization_group_usersUncheckedCreateNestedManyWithoutUsersInput
    survey?: surveyUncheckedCreateNestedManyWithoutUsersInput
    user_surveys?: user_surveysUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrganizationInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrganizationInput, usersUncheckedCreateWithoutOrganizationInput>
  }

  export type usersCreateManyOrganizationInputEnvelope = {
    data: usersCreateManyOrganizationInput | usersCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutOrganizationInput, usersUncheckedUpdateWithoutOrganizationInput>
    create: XOR<usersCreateWithoutOrganizationInput, usersUncheckedCreateWithoutOrganizationInput>
  }

  export type usersUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutOrganizationInput, usersUncheckedUpdateWithoutOrganizationInput>
  }

  export type usersUpdateManyWithWhereWithoutOrganizationInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringNullableFilter<"users"> | string | null
    enabled?: BoolFilter<"users"> | boolean
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    otp_token?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    password_reset_token?: StringNullableFilter<"users"> | string | null
    phone_number?: StringNullableFilter<"users"> | string | null
    username?: StringFilter<"users"> | string
    organization_id?: IntFilter<"users"> | number
    role_id?: IntNullableFilter<"users"> | number | null
  }

  export type usersCreateWithoutRolesInput = {
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    organization: organizationCreateNestedOneWithoutUsersInput
    organization_group_users?: organization_group_usersCreateNestedManyWithoutUsersInput
    survey?: surveyCreateNestedManyWithoutUsersInput
    user_surveys?: user_surveysCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRolesInput = {
    id?: number
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    organization_id: number
    organization_group_users?: organization_group_usersUncheckedCreateNestedManyWithoutUsersInput
    survey?: surveyUncheckedCreateNestedManyWithoutUsersInput
    user_surveys?: user_surveysUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersCreateManyRolesInputEnvelope = {
    data: usersCreateManyRolesInput | usersCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
  }

  export type usersUpdateManyWithWhereWithoutRolesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRolesInput>
  }

  export type usersCreateWithoutOrganization_group_usersInput = {
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    organization: organizationCreateNestedOneWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
    survey?: surveyCreateNestedManyWithoutUsersInput
    user_surveys?: user_surveysCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrganization_group_usersInput = {
    id?: number
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    organization_id: number
    role_id?: number | null
    survey?: surveyUncheckedCreateNestedManyWithoutUsersInput
    user_surveys?: user_surveysUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrganization_group_usersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrganization_group_usersInput, usersUncheckedCreateWithoutOrganization_group_usersInput>
  }

  export type usersUpsertWithWhereUniqueWithoutOrganization_group_usersInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutOrganization_group_usersInput, usersUncheckedUpdateWithoutOrganization_group_usersInput>
    create: XOR<usersCreateWithoutOrganization_group_usersInput, usersUncheckedCreateWithoutOrganization_group_usersInput>
  }

  export type usersUpdateWithWhereUniqueWithoutOrganization_group_usersInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutOrganization_group_usersInput, usersUncheckedUpdateWithoutOrganization_group_usersInput>
  }

  export type usersUpdateManyWithWhereWithoutOrganization_group_usersInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutOrganization_group_usersInput>
  }

  export type usersCreateWithoutSurveyInput = {
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    organization: organizationCreateNestedOneWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
    organization_group_users?: organization_group_usersCreateNestedManyWithoutUsersInput
    user_surveys?: user_surveysCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSurveyInput = {
    id?: number
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    organization_id: number
    role_id?: number | null
    organization_group_users?: organization_group_usersUncheckedCreateNestedManyWithoutUsersInput
    user_surveys?: user_surveysUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSurveyInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSurveyInput, usersUncheckedCreateWithoutSurveyInput>
  }

  export type usersUpsertWithWhereUniqueWithoutSurveyInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutSurveyInput, usersUncheckedUpdateWithoutSurveyInput>
    create: XOR<usersCreateWithoutSurveyInput, usersUncheckedCreateWithoutSurveyInput>
  }

  export type usersUpdateWithWhereUniqueWithoutSurveyInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutSurveyInput, usersUncheckedUpdateWithoutSurveyInput>
  }

  export type usersUpdateManyWithWhereWithoutSurveyInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutSurveyInput>
  }

  export type usersCreateWithoutUser_surveysInput = {
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    organization: organizationCreateNestedOneWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
    organization_group_users?: organization_group_usersCreateNestedManyWithoutUsersInput
    survey?: surveyCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_surveysInput = {
    id?: number
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    organization_id: number
    role_id?: number | null
    organization_group_users?: organization_group_usersUncheckedCreateNestedManyWithoutUsersInput
    survey?: surveyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_surveysInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_surveysInput, usersUncheckedCreateWithoutUser_surveysInput>
  }

  export type usersUpsertWithWhereUniqueWithoutUser_surveysInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutUser_surveysInput, usersUncheckedUpdateWithoutUser_surveysInput>
    create: XOR<usersCreateWithoutUser_surveysInput, usersUncheckedCreateWithoutUser_surveysInput>
  }

  export type usersUpdateWithWhereUniqueWithoutUser_surveysInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutUser_surveysInput, usersUncheckedUpdateWithoutUser_surveysInput>
  }

  export type usersUpdateManyWithWhereWithoutUser_surveysInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUser_surveysInput>
  }

  export type organizationCreateWithoutUsersInput = {
    name: string
  }

  export type organizationUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type organizationCreateOrConnectWithoutUsersInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutUsersInput, organizationUncheckedCreateWithoutUsersInput>
  }

  export type rolesCreateWithoutUsersInput = {
    name: string
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type organization_group_usersCreateWithoutUsersInput = {

  }

  export type organization_group_usersUncheckedCreateWithoutUsersInput = {
    id?: number
  }

  export type organization_group_usersCreateOrConnectWithoutUsersInput = {
    where: organization_group_usersWhereUniqueInput
    create: XOR<organization_group_usersCreateWithoutUsersInput, organization_group_usersUncheckedCreateWithoutUsersInput>
  }

  export type surveyCreateWithoutUsersInput = {

  }

  export type surveyUncheckedCreateWithoutUsersInput = {
    id?: number
  }

  export type surveyCreateOrConnectWithoutUsersInput = {
    where: surveyWhereUniqueInput
    create: XOR<surveyCreateWithoutUsersInput, surveyUncheckedCreateWithoutUsersInput>
  }

  export type user_surveysCreateWithoutUsersInput = {

  }

  export type user_surveysUncheckedCreateWithoutUsersInput = {
    id?: number
  }

  export type user_surveysCreateOrConnectWithoutUsersInput = {
    where: user_surveysWhereUniqueInput
    create: XOR<user_surveysCreateWithoutUsersInput, user_surveysUncheckedCreateWithoutUsersInput>
  }

  export type organizationUpsertWithoutUsersInput = {
    update: XOR<organizationUpdateWithoutUsersInput, organizationUncheckedUpdateWithoutUsersInput>
    create: XOR<organizationCreateWithoutUsersInput, organizationUncheckedCreateWithoutUsersInput>
    where?: organizationWhereInput
  }

  export type organizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: organizationWhereInput
    data: XOR<organizationUpdateWithoutUsersInput, organizationUncheckedUpdateWithoutUsersInput>
  }

  export type organizationUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type organizationUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type rolesUpsertWithoutUsersInput = {
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type organization_group_usersUpsertWithWhereUniqueWithoutUsersInput = {
    where: organization_group_usersWhereUniqueInput
    update: XOR<organization_group_usersUpdateWithoutUsersInput, organization_group_usersUncheckedUpdateWithoutUsersInput>
    create: XOR<organization_group_usersCreateWithoutUsersInput, organization_group_usersUncheckedCreateWithoutUsersInput>
  }

  export type organization_group_usersUpdateWithWhereUniqueWithoutUsersInput = {
    where: organization_group_usersWhereUniqueInput
    data: XOR<organization_group_usersUpdateWithoutUsersInput, organization_group_usersUncheckedUpdateWithoutUsersInput>
  }

  export type organization_group_usersUpdateManyWithWhereWithoutUsersInput = {
    where: organization_group_usersScalarWhereInput
    data: XOR<organization_group_usersUpdateManyMutationInput, organization_group_usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type organization_group_usersScalarWhereInput = {
    AND?: organization_group_usersScalarWhereInput | organization_group_usersScalarWhereInput[]
    OR?: organization_group_usersScalarWhereInput[]
    NOT?: organization_group_usersScalarWhereInput | organization_group_usersScalarWhereInput[]
    id?: IntFilter<"organization_group_users"> | number
  }

  export type surveyUpsertWithWhereUniqueWithoutUsersInput = {
    where: surveyWhereUniqueInput
    update: XOR<surveyUpdateWithoutUsersInput, surveyUncheckedUpdateWithoutUsersInput>
    create: XOR<surveyCreateWithoutUsersInput, surveyUncheckedCreateWithoutUsersInput>
  }

  export type surveyUpdateWithWhereUniqueWithoutUsersInput = {
    where: surveyWhereUniqueInput
    data: XOR<surveyUpdateWithoutUsersInput, surveyUncheckedUpdateWithoutUsersInput>
  }

  export type surveyUpdateManyWithWhereWithoutUsersInput = {
    where: surveyScalarWhereInput
    data: XOR<surveyUpdateManyMutationInput, surveyUncheckedUpdateManyWithoutUsersInput>
  }

  export type surveyScalarWhereInput = {
    AND?: surveyScalarWhereInput | surveyScalarWhereInput[]
    OR?: surveyScalarWhereInput[]
    NOT?: surveyScalarWhereInput | surveyScalarWhereInput[]
    id?: IntFilter<"survey"> | number
  }

  export type user_surveysUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_surveysWhereUniqueInput
    update: XOR<user_surveysUpdateWithoutUsersInput, user_surveysUncheckedUpdateWithoutUsersInput>
    create: XOR<user_surveysCreateWithoutUsersInput, user_surveysUncheckedCreateWithoutUsersInput>
  }

  export type user_surveysUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_surveysWhereUniqueInput
    data: XOR<user_surveysUpdateWithoutUsersInput, user_surveysUncheckedUpdateWithoutUsersInput>
  }

  export type user_surveysUpdateManyWithWhereWithoutUsersInput = {
    where: user_surveysScalarWhereInput
    data: XOR<user_surveysUpdateManyMutationInput, user_surveysUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_surveysScalarWhereInput = {
    AND?: user_surveysScalarWhereInput | user_surveysScalarWhereInput[]
    OR?: user_surveysScalarWhereInput[]
    NOT?: user_surveysScalarWhereInput | user_surveysScalarWhereInput[]
    id?: IntFilter<"user_surveys"> | number
  }

  export type usersCreateManyOrganizationInput = {
    id?: number
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    role_id?: number | null
  }

  export type usersUpdateWithoutOrganizationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    roles?: rolesUpdateOneWithoutUsersNestedInput
    organization_group_users?: organization_group_usersUpdateManyWithoutUsersNestedInput
    survey?: surveyUpdateManyWithoutUsersNestedInput
    user_surveys?: user_surveysUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    organization_group_users?: organization_group_usersUncheckedUpdateManyWithoutUsersNestedInput
    survey?: surveyUncheckedUpdateManyWithoutUsersNestedInput
    user_surveys?: user_surveysUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateManyRolesInput = {
    id?: number
    email?: string | null
    enabled: boolean
    first_name?: string | null
    last_name?: string | null
    otp_token?: string | null
    password?: string | null
    password_reset_token?: string | null
    phone_number?: string | null
    username: string
    organization_id: number
  }

  export type usersUpdateWithoutRolesInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization?: organizationUpdateOneRequiredWithoutUsersNestedInput
    organization_group_users?: organization_group_usersUpdateManyWithoutUsersNestedInput
    survey?: surveyUpdateManyWithoutUsersNestedInput
    user_surveys?: user_surveysUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
    organization_group_users?: organization_group_usersUncheckedUpdateManyWithoutUsersNestedInput
    survey?: surveyUncheckedUpdateManyWithoutUsersNestedInput
    user_surveys?: user_surveysUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersUpdateWithoutOrganization_group_usersInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization?: organizationUpdateOneRequiredWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
    survey?: surveyUpdateManyWithoutUsersNestedInput
    user_surveys?: user_surveysUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrganization_group_usersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    survey?: surveyUncheckedUpdateManyWithoutUsersNestedInput
    user_surveys?: user_surveysUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutOrganization_group_usersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersUpdateWithoutSurveyInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization?: organizationUpdateOneRequiredWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
    organization_group_users?: organization_group_usersUpdateManyWithoutUsersNestedInput
    user_surveys?: user_surveysUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSurveyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    organization_group_users?: organization_group_usersUncheckedUpdateManyWithoutUsersNestedInput
    user_surveys?: user_surveysUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutSurveyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersUpdateWithoutUser_surveysInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization?: organizationUpdateOneRequiredWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
    organization_group_users?: organization_group_usersUpdateManyWithoutUsersNestedInput
    survey?: surveyUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_surveysInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    organization_group_users?: organization_group_usersUncheckedUpdateManyWithoutUsersNestedInput
    survey?: surveyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutUser_surveysInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    otp_token?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    organization_id?: IntFieldUpdateOperationsInput | number
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type organization_group_usersUpdateWithoutUsersInput = {

  }

  export type organization_group_usersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type organization_group_usersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type surveyUpdateWithoutUsersInput = {

  }

  export type surveyUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type surveyUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type user_surveysUpdateWithoutUsersInput = {

  }

  export type user_surveysUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type user_surveysUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
     */
    export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolesCountOutputTypeDefaultArgs instead
     */
    export type RolesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Organization_group_usersCountOutputTypeDefaultArgs instead
     */
    export type Organization_group_usersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Organization_group_usersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveyCountOutputTypeDefaultArgs instead
     */
    export type SurveyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use User_surveysCountOutputTypeDefaultArgs instead
     */
    export type User_surveysCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = User_surveysCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use organizationDefaultArgs instead
     */
    export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = organizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rolesDefaultArgs instead
     */
    export type rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use organization_group_usersDefaultArgs instead
     */
    export type organization_group_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = organization_group_usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use surveyDefaultArgs instead
     */
    export type surveyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = surveyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_surveysDefaultArgs instead
     */
    export type user_surveysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_surveysDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

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