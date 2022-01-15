export interface Config {
  dbConfig: DbConfig;
}

export interface DbConfig {
  type: 'mysql' | 'mariadb';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}
