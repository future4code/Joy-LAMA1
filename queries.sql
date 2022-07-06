CREATE TABLE IF NOT EXISTS LAMA_BANDAS (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  music_genre VARCHAR(255) NOT NULL,
  responsible VARCHAR(255) UNIQUE NOT NULL 
);

CREATE TABLE IF NOT EXISTS LAMA_SHOWS  (
  id VARCHAR(255) PRIMARY KEY,
  week_day VARCHAR(255) NOT NULL,
  start_time INT NOT NULL,
  end_time INT NOT NULL,
  band_id VARCHAR(255) NOT NULL,
  FOREIGN KEY(band_id) REFERENCES LAMA_BANDAS(id)
);
CREATE TABLE IF NOT EXISTS LAMA_USUARIOS (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
);

INSERT INTO  LAMA_BANDAS(id,name,music_genre,responsible)
VALUES("001", "Sepultura","Trash Metal","Derik");
INSERT INTO  LAMA_USUARIOS(id,name,email,password,role)
VALUES("001","Max","max@metal.com","M4XM3T4L","ADMIN");
INSERT INTO  LAMA_SHOWS (id,week_day,start_time,end_time,band_id)
VALUES("002","Sunday","18","19","001");

select * from LAMA_SHOWS ;