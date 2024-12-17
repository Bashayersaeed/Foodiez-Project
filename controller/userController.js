
exports.signup = async (req, res) => {
    const { password } = req.body;
    const saltRounds = 10;
  
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = await User.create(req.body);
      console.log('exports.signup -> hashedPassword', hashedPassword);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };