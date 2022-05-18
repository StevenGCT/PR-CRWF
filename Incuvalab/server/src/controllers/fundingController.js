import { getConnection, sql, queries } from '../database'

export const setRanckFunding = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.rankCategory);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createFunding = async(req, res) => {
    try {
        const { Title, 
            Question1, 
            Question2, 
            Question3, 
            FastDescription, 
            Description, 
            FundingImage1, 
            FundingImage2, 
            FundingImage3, 
            FundingVideo, 
            AccountNumber, 
            SocialMedia, 
            IdCategory, 
            Goal  } = req.body;
        if (Title == null 
            && Question1 == null 
            && Question2 == null 
            && Question3 == null 
            && FastDescription == null 
            && Description == null 
            && FundingImage1 == null 
            && FundingImage2 == null 
            && FundingImage3 == null 
            && FundingVideo == null 
            && AccountNumber == null 
            && SocialMedia == null 
            && IdCategory == null 
            && Goal == null) {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
        } else {
            //console.log(Title);
            const pool = await getConnection();
            var result = await pool.request()
                .input("Title", sql.VarChar, Title)
                .input("Question1", sql.VarChar, Question1)
                .input("Question2", sql.VarChar, Question2)
                .input("Question3", sql.VarChar, Question3)
                .input("FastDescription", sql.VarChar, FastDescription)
                .input("Description", sql.VarChar, Description)
                .input("FundingImage1", sql.VarBinary, FundingImage1)
                .input("FundingImage2", sql.VarBinary, FundingImage2)
                .input("FundingImage3", sql.VarBinary, FundingImage3)
                .input("FundingVideo", sql.VarChar, FundingVideo)
                .input("AccountNumber", sql.VarChar, AccountNumber)
                .input("SocialMedia", sql.VarChar, SocialMedia)
                .input("IdCategory", sql.Int, IdCategory)
                .input("Goal", sql.Decimal, Goal)
                .query(queries.createNewFunding);
            console.log(result.rowsAffected);
            res.json({ Title, Question1, Question2,Question3, FastDescription, Description, FundingImage1, FundingImage2, FundingImage3, FundingVideo, AccountNumber, SocialMedia, IdCategory, Goal });
        }
    } catch (err) {
        res.status(500);
        res.send(error.message);
    }
}

