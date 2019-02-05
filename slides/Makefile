
SRCS := $(wildcard week*.md)
PPTX := $(addprefix pptx/,$(SRCS:.md=.pptx))
PDF  := $(addprefix pdf/,$(SRCS:.md=.pdf))
DEPS := ../templates/custom-reference.pptx

.PHONY: all print

all: $(PPTX) $(PDF)

clean:
	$(RM) $(PPTX)
	$(RM) $(PDF)

pptx/%.pptx : %.md $(DEPS)
	pandoc $< -o $@ --reference-doc=../templates/custom-reference.pptx

pdf/%.pdf : %.md
	pandoc -s $< -o $@