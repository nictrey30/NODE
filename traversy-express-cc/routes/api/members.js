const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../Members');

// get all members
router.get('/', (req, res) => {
  // we don't need to stringify because res.json will take care of that
  res.json(members);
});

// get single member
router.get('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.id} found` });
  }
});

// create member
router.post('/', (req, res) => {
  // res.send(req.body);
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active',
  };
  if (!newMember.name || !newMember.email) {
    // if we dont put the "return" we will have an [ERR_HTTP_HEADERS_SENT] error
    return res.status(400).json({
      msg: 'Please include a valid name and email',
    });
  }
  members.push(newMember);
  res.json(members);
});

// update member
router.put('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    const updatedMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updatedMember.name ? updatedMember.name : member.name;
        member.email = updatedMember.email ? updatedMember.email : member.email;
        res.json({ msg: 'Member Updated', member });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.id} found` });
  }
});

// delete single member
router.delete('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    members.forEach((member, index) => {
      if (member.id === parseInt(req.params.id)) {
        members.splice(index, 1);
        res.json({ msg: 'Member Updated', members });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.id} found` });
  }
});

module.exports = router;
