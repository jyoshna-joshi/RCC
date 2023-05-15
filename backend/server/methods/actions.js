const Content = require("../models/content");
const TemplateType = require("../models/templateType");
const aws = require("../config/awsconfig");
const dateObject = new Date(Date.now());

var functions = {
  saveTemplate: async function (req, res) {
    try {
      if (!req.body) {
        res.status(400).json({ error: "Couldn't find data" });
      } else {
        if (req.file) {
          const params = {
            Bucket: aws.bucket_name,
            Key: req.file.originalname, // replace space in a filename with hyphen
            Body: req.file.buffer,
            ACL: "public-read",
          };
          const date = `0 ${dateObject.getDate()}`.slice(-2);

          // current month
          const month = `0 ${dateObject.getMonth() + 1}`.slice(-2);

          // current year
          const year = dateObject.getFullYear();
          console.log(console.log(`${year}-${month}-${date}`));
          await aws.client.upload(params, async (err, data) => {
            if (err) {
              console.log(err);
              return res
                .status(500)
                .json({ error: "Error while uploading file" + err });
            } else if (data) {
              fileName = data.Location;
              const content = new Content({
                contributor: req?.body?.contributor,
                coverage: req?.body?.coverage,
                creator: req?.body?.creator,
                date: req?.body?.date,
                description: req?.body?.description,
                format: fileName,
                identifier: req?.body?.identifier,
                language: req?.body?.language,
                publisher: req?.body?.publisher,
                relation: req?.body?.relation,
                rights: req?.body?.rights,
                source: req?.body?.source,
                subject: req?.body?.subject,
                title: req?.body?.title,
                publisher: req?.body?.publisher,
                type: req?.body?.type,
                status: req?.body?.creator === "admin" ? "Approved" : "Pending",
                timestamp: `${year}-${month}-${date}`,
              });
              console.log(content);
              await content.save();
              return res.status(200).send("Saved after uploading file!!!");
            }
          });
        } else {
          const content = new Content({
            contributor: req?.body?.contributor,
            coverage: req?.body?.coverage,
            creator: req?.body?.creator,
            date: req?.body?.date,
            description: req?.body?.description,
            identifier: req?.body?.identifier,
            language: req?.body?.language,
            publisher: req?.body?.publisher,
            relation: req?.body?.relation,
            rights: req?.body?.rights,
            source: req?.body?.source,
            subject: req?.body?.subject,
            title: req?.body?.title,
            publisher: req?.body?.publisher,
            type: req?.body?.type,
            status: req?.body?.creator === "admin" ? "Approved" : "Pending",
          });
          await content.save();
          return res.status(200).send("Saved!!!");
        }
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  fetchFieldsByType: async function (req, res) {
    try {
      let type = req.query.type;
      if (type) {
        let templateType = await TemplateType.findOne({ type });
        for(var i = 0; i < templateType.fields.length; i++)
        {
            if(templateType.fields[i].type === "string"){
                templateType.fields[i].type = "Text";
            }
        }
        if (templateType) return res.status(200).send(templateType);
        else return res.status(500).send("Could not find fields by given type");
      } else {
        return res.status(500).send("Could not find type");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  fetchContentById: async function (req, res) {
    try {
      if (!req.params.id) {
        return res.status(500).send("Could not find id");
      } else {
        let content = await Content.findById(req.params.id);
        if (content) return res.status(200).json(content);
        else return res.status(500).send("Could not find content");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  updateStatus: async function (req, res) {
    try {
      if (!req.params.id) {
        return res.status(500).send("Could not find id");
      } else {
        await Content.updateOne(
          { _id: req.params.id },
          { status: req.body.status }
        );
        return res.status(200).send("Status updated");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  listByStatus: async function (req, res) {
    try {
      if (!req.query.status) {
        let contents = await Content.find();
        return res.status(200).send(contents);
      } else {
        let status = req.query.status;
        let contents = await Content.find({ status });
        return res.status(200).send(contents);
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  addUpdateTemplateType: async function (req, res) {
    try {
      if (req.body.type && req.body.fields) {
        await TemplateType.updateOne(
          { type: req?.body?.type },
          {
            type: req?.body?.type,
            fields: req?.body?.fields,
          },
          {
            upsert: true,
          }
        );
        return res.status(200).send("Updated!!!");
      } else {
        return res.status(500).send("Couldn't find data to add / update");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  fetchContentUploadedByCreator: async function (req, res) {
    try {
      const contents = await Content.find({ creator: req.query.creator });
      return res.status(200).json(contents);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  fetchTemplateTypes: async function (req, res) {
    try {
      let templateTypes = await TemplateType.find({}, { type: 1, _id: 0 });
      return res.status(200).json(
        templateTypes.map((templateType) => {
          return { type: templateType.type };
        })
      );
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  removeTemplate: async function (req, res) {
    try {
      if (!req.query.type) {
        return res.status(500).send("Could not find type to remove");
      } else {
        const result = await TemplateType.deleteOne({ type: req.query.type });
        if (!result.deletedCount) {
          return res.status(500).send("Could not find template type to remove");
        } else {
          return res.status(200).send("Removed!!!");
        }
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  searchContent: async function (req, res) {
    try {
      if (req.query.templateType === "AllCategories") {
        if (req.query.year) query["date"] = req.query.year;
        if (req.query.publisher) query["publisher"] = req.query.publisher;
        if (req.query.searchText)
          query["title"] = new RegExp(req.query.searchText.toLowerCase(), "i");
        let contents = await Content.find(query);
        return res.status(200).json(contents);
      } else {
        let query = { type: req.query.templateType };
        if (req.query.year) query["date"] = req.query.year;
        if (req.query.publisher) query["publisher"] = req.query.publisher;
        if (req.query.searchText)
          query["title"] = new RegExp(req.query.searchText.toLowerCase(), "i");
        let contents = await Content.find(query);
        return res.status(200).json(contents);
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
};

module.exports = functions;
