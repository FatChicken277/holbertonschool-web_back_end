-- Resets the attribute valid_email only when the email has been changed.
-- If the trigger body has more than one statement, you need to use the BEGIN END block.
-- And, you also need to change the default delimiter.

DELIMITER $$

CREATE TRIGGER email_validator
    BEFORE UPDATE
    ON users FOR EACH ROW
BEGIN
    IF OLD.email != NEW.email THEN
        SET NEW.valid_email = 0;
    END IF;
END$$    

DELIMITER ;
