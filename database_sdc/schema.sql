DROP TABLE featuredProducts IF EXISTS;
CREATE TABLE featuredProducts (
	productId SERIAL NOT NULL PRIMARY KEY,
	name varchar(100) NOT NULL,
	brand varchar(100) NOT NULL,
	department varchar(100) NOT NULL,
	rating Numeric NOT NULL,
	ratingCount INT NOT NULL,
	price numeric(10,2) NOT NULL,
	shade varchar(100) NOT NULL,
	img varchar(300) NOT NULL,
	description varchar(300),
	features varchar(500)[],
	bestUse varchar(100),
	materials varchar(100),
	dimensions INT[],
	weight INT[]
);

COPY featuredproducts FROM '/Users/seanhchen98/Code/hackReactor/hrsjo3/sdc/Featured_Product/data.csv' DELIMITER '|' CSV HEADER;