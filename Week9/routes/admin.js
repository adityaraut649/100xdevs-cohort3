const { Router } = require("express");
const adminRouter = Router();
const { adminSchema } = require("../ds");
const bcrypt = require('bcrypt');
// bcrypt, and , joson
const { z } = require('zod');

adminRouter.post("/signup", async function(req, res) {
    // 1. Zod Validation Schema
    const signupSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
        firstName: z.string().min(1),
        lastName: z.string().min(1)
    });

    // 2. Validate the request body
    const parsedData = signupSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(400).json({
            message: "Incorrect format",
            error: parsedData.error.issues
        });
    }

    const { email, password, firstName, lastName } = req.body;

    try {
        // 3. Hash the password (10 salt rounds is standard)
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4. Create the admin record
        await adminModel.create({
            email,
            password: hashedPassword, // Store the hash, NOT the plaintext
            firstName,
            lastName
        });
        
        res.json({
            message: "Signup succeeded"
        });

    } catch (e) {
        // 5. Handle potential errors (e.g., Duplicate Email)
        if (e.code === 11000) {
            return res.status(409).json({ message: "Admin already exists" });
        }
        res.status(500).json({ message: "Internal server error" });
    }
});

adminRouter.post("/signin", (req, res) => {
  const { username, password} = req.body;

  try {

    const isMatch = await bcrypt.compare(password , adminRouter.password);


    if (isMatch) {
            // 3. Success: Send a token or success message
            res.json({
                message: "Login successful!",
                // token: generateToken(admin._id) 
            });
        } else {
            // 4. Failure: Keep messages vague for security
            res.status(401).json({ message: "Invalid credentials." });
        }
  }catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }

});

adminRouter.post("/course", (req, res) => {
  res.json({
    message: "Admin Router",
  });
});

adminRouter.put("/course", (req, res) => {
  res.json({
    message: "Admin Router",
  });
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "Admin Router",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
