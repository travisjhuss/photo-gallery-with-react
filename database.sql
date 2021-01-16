-- Database Name 'react_gallery'

-- create table query
CREATE TABLE "gallery" (
    "id" SERIAL primary key,
    "path" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "likes" INT default 0

);

-- fill table with aodrable pictures of Morton
INSERT INTO "gallery" ("path", "description")
VALUES ('images/withStick.jpg', 'This is my dog, Morton. We call him Morty for short.'),
('images/mortyPuppy.jpg', 'This is when he was 4 months old and we met him at the humane society.'),
('images/fleas.jpg', 'He was being treated for fleas so we had to wait to take him home.'),
('images/puppySleep.jpg', 'He was able to get cozy at home quickly.'),
('images/inBedWithJasper.jpg', 'He quickly became buds with our other dog, Jasper.'),
('images/mortyStanding.jpg', 'He grew quickly and was soon able to get into all kinds of trouble.'),
('images/withJasperInCar.jpg', 'In no time he was the same size as his brother.'),
('images/atDayCare.jpg', 'He loves playing in the kiddie pool at daycare.'),
('images/twisting.jpg', 'He finds new ways to lay every day.'),
('images/lookingOutWindow.jpg', 'He often ponders the big questions in life.'),
('images/almostDead.jpg', 'A year ago, we almost lost Morty when he ate something he shouldn''t have.'),
('images/inTshirt.jpg', 'He recovered from surgery though and had to wear a t-shirt to protect his stitches.'),
('images/distinguished.jpg', 'He hoards toys from his brother.'),
('images/inSunlight.jpg', 'Like Sheryl Crow, he wants to soak up the sun.');

